import { DOCUMENT, Injectable, inject } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

export type Lang = 'en' | 'de';

const STORAGE_KEY = 'lang';
const SUPPORTED_LANGS: Lang[] = ['en', 'de'];

@Injectable({ providedIn: 'root' })
export class LanguageService {
  private translate = inject(TranslateService);
  private document = inject(DOCUMENT);

  readonly current = this.translate.currentLang;

  /**
   * Sets the initial language: stored choice first, falling back to English.
   */
  init(): void {
    this.translate.addLangs(SUPPORTED_LANGS);
    this.apply(this.storedLang() ?? 'en');
  }

  /**
   * Switches the language and remembers the choice.
   * @param lang - Language code to switch to.
   */
  set(lang: Lang): void {
    localStorage.setItem(STORAGE_KEY, lang);
    this.apply(lang);
  }

  /** Activates the language and updates the html lang attribute. */
  private apply(lang: Lang): void {
    this.translate.use(lang);
    this.document.documentElement.lang = lang;
  }

  /** Returns the stored language if it is supported. */
  private storedLang(): Lang | null {
    const lang = localStorage.getItem(STORAGE_KEY);
    return this.isSupported(lang) ? lang : null;
  }

  /** Checks whether a value is a supported language code. */
  private isSupported(lang: string | null | undefined): lang is Lang {
    return SUPPORTED_LANGS.includes(lang as Lang);
  }
}

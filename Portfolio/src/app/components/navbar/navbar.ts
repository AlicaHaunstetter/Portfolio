import { Component, inject, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Lang, LanguageService } from '../../services/language';

@Component({
  imports: [TranslatePipe],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  private language = inject(LanguageService);

  protected readonly isMenuOpen = signal(false);
  protected readonly currentLang = this.language.current;

  /** Toggles the mobile menu open or closed. */
  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  /** Closes the mobile menu. */
  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  /**
   * Sets the active display language.
   * @param lang - Language code to switch to.
   */
  protected setLang(lang: Lang): void {
    this.language.set(lang);
  }
}

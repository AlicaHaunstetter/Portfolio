import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-navbar',
  styleUrl: './navbar.scss',
  templateUrl: './navbar.html',
})
export class Navbar {
  protected readonly isMenuOpen = signal(false);
  protected readonly currentLang = signal<'en' | 'de'>('en');

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
  protected setLang(lang: 'en' | 'de'): void {
    this.currentLang.set(lang);
  }
}

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

  protected toggleMenu(): void {
    this.isMenuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.isMenuOpen.set(false);
  }

  protected setLang(lang: 'en' | 'de'): void {
    this.currentLang.set(lang);
  }
}

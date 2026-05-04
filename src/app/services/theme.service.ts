import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  // Check localStorage, otherwise default to 'light'
  currentTheme = signal<string>(localStorage.getItem('app-theme') || 'light');

  constructor() {
    effect(() => {
      const theme = this.currentTheme();
      // This is the bridge between Angular and DaisyUI
      document.documentElement.setAttribute('data-theme', theme);
      localStorage.setItem('app-theme', theme);
    });
  }

  setTheme(theme: string) {
    this.currentTheme.set(theme);
  }
}

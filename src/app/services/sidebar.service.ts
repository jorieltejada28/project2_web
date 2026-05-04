import { effect, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  // Ensure the name here is exactly 'isOpen'
  isOpen = signal<boolean>(localStorage.getItem('sidebar_state') !== 'false');

  constructor() {
    effect(() => {
      localStorage.setItem('sidebar_state', this.isOpen().toString());
    });
  }

  toggle() {
    this.isOpen.update((state) => !state);
  }
}

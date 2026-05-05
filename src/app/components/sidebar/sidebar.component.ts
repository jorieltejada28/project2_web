import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);
  private authService = inject(AuthService);

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', tooltip: 'Dashboard' },
    { label: 'Settings', icon: 'settings', tooltip: 'Settings' }
  ];

  onSignOut() {
    const confirmLogout = confirm('Are you sure you want to sign out?');
    if (confirmLogout) {
      this.authService.logout();
    }
  }
}

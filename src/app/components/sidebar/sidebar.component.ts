import { Component, inject } from '@angular/core';
import { SidebarService } from '../../services/sidebar.service';

@Component({
  selector: 'app-sidebar',
  imports: [],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css',
})
export class SidebarComponent {
  sidebarService = inject(SidebarService);

  menuItems = [
    { label: 'Dashboard', icon: 'dashboard', tooltip: 'Dashboard' },
    { label: 'Settings', icon: 'settings', tooltip: 'Settings' }
  ];
}

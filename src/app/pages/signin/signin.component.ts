import { Component } from '@angular/core';
import { MainComponent } from '../../layouts/main/main.component';

@Component({
  selector: 'app-signin',
  imports: [MainComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent {
  handleGoogleSignIn() {
  console.log('Redirecting to Google Auth...');
  // Logic for Firebase, Auth0, or Supabase goes here
}
}

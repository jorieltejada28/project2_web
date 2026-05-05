import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { environment } from '../../../environtment/environment';
import { MainComponent } from '../../layouts/main/main.component';

declare var google: any;

@Component({
  selector: 'app-signin',
  standalone: true,
  imports: [MainComponent],
  templateUrl: './signin.component.html',
  styleUrl: './signin.component.css',
})
export class SigninComponent implements OnInit {
  private tokenClient: any;

  constructor(
    private authService: AuthService,
    private ngZone: NgZone,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initializeGoogleAuth();
  }

  private initializeGoogleAuth(): void {
    if (typeof google !== 'undefined') {
      // CHANGE THIS: Use initCodeClient instead of initTokenClient
      this.tokenClient = google.accounts.oauth2.initCodeClient({
        client_id: environment.googleClientId,
        scope: 'openid profile email',
        // This enables FedCM compatibility and helps with the GSI warnings
        ux_mode: 'popup',
        callback: (res: any) => this.handleTokenResponse(res),
      });
    } else {
      setTimeout(() => this.initializeGoogleAuth(), 100);
    }
  }

  handleGoogleSignIn() {
    if (this.tokenClient) {
      // Now requestCode() will work because this is a CodeClient
      this.tokenClient.requestCode();
    } else {
      console.error('Google Client not initialized');
    }
  }
  private handleTokenResponse(response: any): void {
    if (response.error) {
      console.error('Google Sign-In error:', response.error);
      return;
    }

    this.ngZone.run(() => {
      // Exchange authorization code for tokens on backend
      this.authService.googleSignIn(response.code).subscribe({
        next: (res) => {
          console.log('Backend Success:', res);
          this.router.navigate(['/dashboard']);
        },
        error: (err) => console.error('Backend Auth Failed:', err)
      });
    });
  }
}
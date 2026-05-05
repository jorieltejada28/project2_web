import { Injectable, signal } from '@angular/core';
import { environment } from '../../environtment/environment';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly apiUrl = `${environment.apiUrl}/auth`;
  currentUser = signal<any>(null);

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  googleSignIn(token: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/google`, { token }).pipe(
      tap((res: any) => {
        if (res.token) {
          localStorage.setItem('id_token', res.token);
        }
      })
    );
  }

  logout() {
    localStorage.removeItem('token'); 
    this.currentUser.set(null);
    this.router.navigate(['/signin']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('id_token');
  }

  getToken(): string | null {
    return localStorage.getItem('id_token');
  }
}

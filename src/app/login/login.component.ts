import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router, private http: HttpClient) { }

  login() {
    // Define the payload
    const payload = {
      email: this.email,
      password: this.password
    };

    // Send a POST request to your Express server
    this.http.post<{ valid: boolean, user: any }>('http://localhost:3000/api/auth', payload).subscribe({
      next: (response) => {
        if (response.valid) {
          // Store user details in session storage (excluding the password)
          sessionStorage.setItem('currentUser', JSON.stringify(response.user));
          // Navigate to the account page
          this.router.navigate(['/account']);
          this.errorMessage = null;
        } else {
          this.errorMessage = 'Invalid email or password';
        }
      }
    });
  }
}

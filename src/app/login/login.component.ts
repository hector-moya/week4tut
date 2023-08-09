import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private router: Router) {}

  login() {
    const users = [
      { email: 'user1@example.com', password: 'password' },
      { email: 'user2@example.com', password: 'password' },
      { email: 'user3@example.com', password: 'password' },
    ];
    console.log(this.email + this.password);
    const user = users.find(
      (u) => u.email === this.email && u.password === this.password
    );

    if (user) {
      this.router.navigate(['/account']);
      this.errorMessage = null;
    } else {
      this.errorMessage = 'Invalid email or password';
    }
  }
}

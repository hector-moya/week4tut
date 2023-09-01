import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent {

  //inject router
  constructor(private router: Router) { }

  logout(): void {
    sessionStorage.clear();
    this.router.navigate(['/login']);
  }

}

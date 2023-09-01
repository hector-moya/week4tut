import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
  
})
export class ProfileComponent {
  profileForm: FormGroup;
  currentUser: any;


  constructor(private fb: FormBuilder) {
    this.profileForm = this.fb.group({
      username: [''],
      birthdate: [''],
      age: ['']
    });
  }

  ngOnInit(): void {
    // Assuming the user data is stored in session storage under the key 'currentUser'
    this.currentUser = JSON.parse(sessionStorage.getItem('currentUser') || '{}');
    this.profileForm.setValue({
      username: this.currentUser.username || '',
      birthdate: this.currentUser.birthdate || '',
      age: this.currentUser.age || ''
    });
  }

  saveChanges(): void {
    const updatedUser = this.profileForm.value;
    // Update the existing 'currentUser' object in session storage
    Object.assign(this.currentUser, updatedUser);
    sessionStorage.setItem('currentUser', JSON.stringify(this.currentUser));
  }

}

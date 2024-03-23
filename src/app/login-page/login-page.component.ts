import { Component, OnInit } from '@angular/core';
import { AfService } from '../providers/af.service';
import { CommonModule } from '@angular/common';
import { User } from '../providers/user';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent implements OnInit {
  user: User;

  constructor(public afService: AfService) {
  }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
  }
  
  login() {
    this.afService.loginWithGoogle()
  }
}

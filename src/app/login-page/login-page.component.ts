import { Component } from '@angular/core';
import { AfService } from '../providers/af.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {
  constructor(public afService: AfService) {

  }

  login() {
    this.afService.loginWithGoogle()
  }
}

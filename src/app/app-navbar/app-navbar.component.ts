import { Component } from '@angular/core';
import { AfService } from '../providers/af.service';
import { User } from '../providers/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  user: User;

  constructor(public afService: AfService) {
  }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
  }
}

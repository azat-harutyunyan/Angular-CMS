import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [NgFor, RouterModule, AppNavbarComponent, MatSidenavModule, MatButtonModule, MatListModule, MatIconModule],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {
  links = [
    {
      name: 'Menus',
      link: 'menus',
    },
    {
      name: 'Posts',
      link: 'posts',
    },
  ];
}

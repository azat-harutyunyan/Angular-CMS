import { Component } from '@angular/core';
import { AfService } from '../../providers/af.service';
import { User } from '../../providers/user';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MenusService } from '../../service/menus/menus.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule, MatToolbarModule, MatButton, MatIconModule, MatMenuModule],
  templateUrl: './app-navbar.component.html',
  styleUrl: './app-navbar.component.css'
})
export class AppNavbarComponent {
  user: User;
  menusList: any

  constructor(public afService: AfService, private menusService: MenusService) {
  }

  ngOnInit() {
    this.afService.user$.subscribe(user => this.user = user)
    this.menusService.getMenus().subscribe(menus => {
      this.menusList = menus
    })
  }
}

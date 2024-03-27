import { Component } from '@angular/core';
import { PagesListComponent } from './front-page/pages-list/pages-list.component';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './admin-page/app-navbar/app-navbar.component';
import { MatButtonModule } from '@angular/material/button';
import { FrontPageComponent } from './front-page/front-page.component';
@Component({
  standalone: true,
  imports: [PagesListComponent, RouterModule, AppNavbarComponent, MatButtonModule, FrontPageComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms-angular5-firebase';
}

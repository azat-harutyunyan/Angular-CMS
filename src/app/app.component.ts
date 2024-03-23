import { Component } from '@angular/core';
import { PagesListComponent } from './pages-list/pages-list.component';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@Component({
  standalone: true,
  imports: [PagesListComponent, RouterModule, AppNavbarComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms-angular5-firebase';
}

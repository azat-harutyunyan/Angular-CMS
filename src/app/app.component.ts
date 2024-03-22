import { Component } from '@angular/core';
import { PagesListComponent } from './pages-list/pages-list.component';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [PagesListComponent, RouterModule],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cms-angular5-firebase';
}

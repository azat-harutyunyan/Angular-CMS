import { Component } from '@angular/core';
import { PagesListComponent } from './pages-list/pages-list.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    standalone: true,
    imports: [PagesListComponent]
})
export class AppComponent {
  title = 'cms-angular5-firebase';
}

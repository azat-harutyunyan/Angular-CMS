import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from '../app-navbar/app-navbar.component';

@Component({
  selector: 'app-admin-page',
  standalone: true,
  imports: [RouterModule, AppNavbarComponent],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.css'
})
export class AdminPageComponent {

}

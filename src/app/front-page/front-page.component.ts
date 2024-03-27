import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [RouterModule, AppNavbarComponent],
  templateUrl: './front-page.component.html',
  styleUrl: './front-page.component.css'
})
export class FrontPageComponent {

}

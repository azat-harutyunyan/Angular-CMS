import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';

export const APP_ROUTES: Routes = [
	{ path: '', component: PagesListComponent },
	{ path: 'login', component: LoginPageComponent }

];

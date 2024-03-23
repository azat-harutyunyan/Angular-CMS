import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { adminGuard } from './guards/admin.guard';
import { subcriberGuard } from './guards/subcriber.guard';

export const APP_ROUTES: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'article', component: PagesListComponent, canActivate: [subcriberGuard] },
	{ path: 'admin', component: AdminPageComponent, canActivate: [adminGuard] }

];

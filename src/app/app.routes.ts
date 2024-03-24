import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { adminGuard } from './guards/admin.guard';
import { subcriberGuard } from './guards/subcriber.guard';

export const APP_ROUTES: Routes = [
	{ path: '', component: HomePageComponent },
	{ path: 'login', component: LoginPageComponent },
	{ path: 'article', component: PagesListComponent, canActivate: [subcriberGuard] },
	{
		path: 'admin',
		loadChildren: () => import('./admin-page/admin.routes').then(mod => mod.ADMIN_ROUTES),
		canActivate: [adminGuard]
	}

];

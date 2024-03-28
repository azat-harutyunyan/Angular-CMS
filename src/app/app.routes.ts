import { Routes } from '@angular/router';
import { LoginPageComponent } from './login-page/login-page.component';
import { adminGuard } from './guards/admin.guard';

export const APP_ROUTES: Routes = [
	{ 
		path: 'login', 
		component: LoginPageComponent 
	},
	{
		path: 'admin',
		loadChildren: () => import('./admin-page/admin.routes').then(mod => mod.ADMIN_ROUTES),
		canActivate: [adminGuard]
	},
	{ 
		path: '', 
		loadChildren: () => import('./front-page/front.routes').then(mod => mod.FRONT_ROUTES), 
	},
];

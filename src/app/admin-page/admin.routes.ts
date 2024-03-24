import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

export const ADMIN_ROUTES: Routes = [
	{
		path: '',
		component: AdminPageComponent,
		children: [
			{
				path: "dashboard",
				component: DashboardComponent
			},
			{
				path: '',
				pathMatch: "full",
				redirectTo: "dashboard"
			}
		]
	}
];

import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
// import { subcriberGuard } from '../guards/subcriber.guard';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';

export const FRONT_ROUTES: Routes = [
	{
		path: '',
		component: FrontPageComponent,
		children: [
			{
				path: "home",
				component: HomePageComponent
			},
			{
				path: 'article', component: PagesListComponent,
				// canActivate: [subcriberGuard]
			},
			{
				path: '**',
				pathMatch: "full",
				redirectTo: "home"
			}
		]
	}
];

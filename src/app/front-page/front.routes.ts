import { Routes } from '@angular/router';
import { FrontPageComponent } from './front-page.component';
// import { subcriberGuard } from '../guards/subcriber.guard';
import { PagesListComponent } from './pages-list/pages-list.component';
import { HomePageComponent } from './home-page/home-page.component';
import { PagesComponent } from './pages/pages.component';

export const FRONT_ROUTES: Routes = [
	{
		path: '',
		component: FrontPageComponent,
		children: [
			{
				path: "",
				component: HomePageComponent
			},
			{
				path: 'article', 
				component: PagesListComponent,
				// canActivate: [subcriberGuard]
			},
			{
				path: 'pages/:url',
				component: PagesComponent,
			},
			{
				path: '**',
				redirectTo: "home"
			}
		]
	}
];

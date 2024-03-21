import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';

import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { PagesListComponent } from './pages-list/pages-list.component';

@NgModule({
	declarations: [
		AppComponent,
		PagesListComponent
	],
	imports: [
		BrowserModule,
		AngularFireModule.initializeApp(environment.firebase),
		AngularFireDatabaseModule,
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
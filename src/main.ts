import { importProvidersFrom } from '@angular/core';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; 
import { material } from './app/app.material';

import { AppComponent } from './app/app.component';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { environment } from './environments/environment';
import { provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';

import 'hammerjs'


bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom
      (
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestore,
        BrowserAnimationsModule,
      ),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
  ]
})
  .catch(err => console.error(err));

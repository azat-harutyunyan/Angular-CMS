import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from './environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, withPreloading, PreloadAllModules, withDebugTracing } from '@angular/router';
import { APP_ROUTES } from './app/app.routes';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom
      (
        BrowserModule,
        AngularFireModule.initializeApp(environment.firebase),
        AngularFireDatabaseModule,
        AngularFireAuthModule,
        AngularFirestore
      ),
    provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
  ]
})
  .catch(err => console.error(err));

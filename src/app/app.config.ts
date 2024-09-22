import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"danotes-9479b","appId":"1:1038883841629:web:2f2b45a6005e9c78ffcfb4","storageBucket":"danotes-9479b.appspot.com","apiKey":"AIzaSyCFtwNGkLJzU0cINAv-TM1l0RGlyfLvOXM","authDomain":"danotes-9479b.firebaseapp.com","messagingSenderId":"1038883841629"}))), 
              importProvidersFrom(provideFirestore(() => getFirestore()))]
};

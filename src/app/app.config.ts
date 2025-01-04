import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth, connectAuthEmulator } from '@angular/fire/auth';
import { provideFirestore, getFirestore, connectFirestoreEmulator } from '@angular/fire/firestore';
import { provideFunctions, getFunctions, connectFunctionsEmulator} from '@angular/fire/functions';
import { provideMessaging, getMessaging } from '@angular/fire/messaging';
import { provideStorage, getStorage, connectStorageEmulator } from '@angular/fire/storage';
import { routes } from './app.routes';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-7ef45","appId":"1:550797487520:web:4405e4855deb2873cb08c5","storageBucket":"friendlychat-7ef45.firebasestorage.app","apiKey":"AIzaSyA_Hbk5H2Jc5xoJVOYvHUZe4eFeXuOaGRc","authDomain":"friendlychat-7ef45.firebaseapp.com","messagingSenderId":"550797487520","measurementId":"G-DRTY2NMYFM"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage()), provideFirebaseApp(() => initializeApp({"projectId":"friendlychat-7ef45","appId":"1:550797487520:web:4405e4855deb2873cb08c5","storageBucket":"friendlychat-7ef45.firebasestorage.app","apiKey":"AIzaSyA_Hbk5H2Jc5xoJVOYvHUZe4eFeXuOaGRc","authDomain":"friendlychat-7ef45.firebaseapp.com","messagingSenderId":"550797487520","measurementId":"G-DRTY2NMYFM"})), provideAuth(() => getAuth()), provideFirestore(() => getFirestore()), provideMessaging(() => getMessaging()), provideStorage(() => getStorage())
  ],
};

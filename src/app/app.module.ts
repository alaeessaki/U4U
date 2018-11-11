import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { SigninPage } from '../pages/signin/signin';
import { Tab1Page } from '../pages/tab1/tab1';
import { Tab2Page } from '../pages/tab2/tab2';
import { Tab3Page } from '../pages/tab3/tab3';
import { Tab4Page } from '../pages/tab4/tab4';
import { Tab5Page } from '../pages/tab5/tab5';
import { Tab6Page } from '../pages/tab6/tab6';
import { HospitalPage } from '../pages/hospital/hospital';
import { CliniquesPage } from '../pages/cliniques/cliniques';
import { PharmaciesPage } from '../pages/pharmacies/pharmacies';
import { LamPage } from '../pages/lam/lam';
import { DentistesPage } from '../pages/dentistes/dentistes';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SigninPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    HospitalPage,
    CliniquesPage,
    PharmaciesPage,
    LamPage,
    DentistesPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SigninPage,
    Tab1Page,
    Tab2Page,
    Tab3Page,
    Tab4Page,
    Tab5Page,
    Tab6Page,
    HospitalPage,
    CliniquesPage,
    PharmaciesPage,
    LamPage,
    DentistesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}

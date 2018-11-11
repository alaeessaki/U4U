import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tab1Page } from './tab1';
import { HospitalPage } from '../hospital/hospital';
import { CliniquesPage } from '../cliniques/cliniques';
import { PharmaciesPage } from '../pharmacies/pharmacies';
import { LamPage } from '../lam/lam';
import { DentistesPage } from '../dentistes/dentistes';


@NgModule({
  declarations: [
    Tab1Page,
    HospitalPage,
    CliniquesPage,
    PharmaciesPage,
    LamPage,
    DentistesPage
  ],
  imports: [
    IonicPageModule.forChild(Tab1Page),
  ],
})
export class Tab1PageModule {}

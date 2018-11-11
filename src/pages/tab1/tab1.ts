import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HospitalPage } from '../hospital/hospital';
import { CliniquesPage } from '../cliniques/cliniques';
import { PharmaciesPage } from '../pharmacies/pharmacies';
import { LamPage } from '../lam/lam';
import { DentistesPage } from '../dentistes/dentistes';
/**
 * Generated class for the Tab1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab1',
  templateUrl: 'tab1.html',
})
export class Tab1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToHospital(){
  this.navCtrl.push(HospitalPage);

  }
  goToClinique(){
    this.navCtrl.push(CliniquesPage);
  }
  goToPharma(){
    this.navCtrl.push(PharmaciesPage);
  }
  goToLam(){
    this.navCtrl.push(LamPage);
  }
  goToDentistes(){
    this.navCtrl.push(DentistesPage);
  }



  ionViewDidLoad() {
    console.log('ionViewDidLoad Tab1Page');
  }

}

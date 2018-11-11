import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*tabs imports*/
import { SigninPage } from '../signin/signin';
import { Tab1Page } from '../tab1/tab1';
import { Tab2Page } from '../tab2/tab2';
import { Tab3Page } from '../tab3/tab3';
import { Tab4Page } from '../tab4/tab4';
import { Tab5Page } from '../tab5/tab5';
import { Tab6Page } from '../tab6/tab6';
/*----------------------*/


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public isSearchbarOpened = false;
  constructor(public navCtrl: NavController) {

  }

/*go to tabs functions*/
goToS(){
this.navCtrl.push(SigninPage);
}
goToTab1(){
this.navCtrl.push(Tab1Page);
}
goToTab2(){
this.navCtrl.push(Tab2Page);
}
goToTab3(){
this.navCtrl.push(Tab3Page);
}
goToTab4(){
this.navCtrl.push(Tab4Page);
}
goToTab5(){
this.navCtrl.push(Tab5Page);
}
goToTab6(){
this.navCtrl.push(Tab6Page);
}

onSearch(event){
console.log(event.target.value);
}
/*----------------------*/

}

import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-functions',
  templateUrl: 'functions.html',
})
export class FunctionsPage {
  public functions: any;

  constructor(public navCtrl: NavController) {
    this.functions=[0,10,7,'ass',4,100,5,7,8,9,10];
  }

}

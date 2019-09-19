import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-info',
  templateUrl: './info.page.html',
  styleUrls: ['./info.page.scss'],
})
export class InfoPage implements OnInit {

  constructor(public alertController: AlertController,private route:Router) { }

  ngOnInit() {
  }
  

  async presentAlertConfirm() { //i use this method to control my 
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: ' <strong>Add Extras</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            console.log(this.route.navigateByUrl("mocha-tot")); //go to cancel page
          }
        }, {
          text: 'Add Extras',
          handler: () => {
            console.log(this.route.navigateByUrl("mocha")); //go to another page
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm2() { //i use this method to control my 
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: ' <strong>Add Extras</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            console.log(this.route.navigateByUrl("cappu-tot")); //go to cancel page
          }
        }, {
          text: 'Add Extras',
          handler: () => {
            console.log(this.route.navigateByUrl("cappucino")); //go to another page
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm3() { //i use this method to control my 
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: ' <strong>Add Extras</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            console.log(this.route.navigateByUrl("caffe-tot")); //go to cancel page
          }
        }, {
          text: 'Add Extras',
          handler: () => {
            console.log(this.route.navigateByUrl("caffee")); //go to another page
          }
        }
      ]
    });

    await alert.present();
  }

  async presentAlertConfirm4() { //i use this method to control my 
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: ' <strong>Add Extras</strong>!!!',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: ( ) => {
            console.log(this.route.navigateByUrl("italian-tot")); //go to cancel page
          }
        }, {
          text: 'Add Extras',
          handler: () => {
            console.log(this.route.navigateByUrl("italian")); //go to another page
          }
        }
      ]
    });

    await alert.present();
  }

}

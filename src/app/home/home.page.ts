import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { FileOpener } from '@ionic-native/file-opener/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router:Router) {

  // constructor(private fileOpener: FileOpener) {

   // this.fileOpener.open('path/to/file.pdf', 'application/pdf')
  //   .then(() => console.log('File is opened'))
  //   .catch(e => console.log('Error opening file', e));
  
  // this.fileOpener.showOpenWithDialog('path/to/file.pdf', 'application/pdf')
  //   .then(() => console.log('File is opened'))
  //   .catch(e => console.log('Error opening file', e));
  }
  
  submit(){
    this.router.navigateByUrl("info");
  }
}

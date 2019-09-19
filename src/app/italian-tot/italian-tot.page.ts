import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-italian-tot',
  templateUrl: './italian-tot.page.html',
  styleUrls: ['./italian-tot.page.scss'],
})
export class ItalianTotPage implements OnInit {
  total:number;
  howMany:number=0;
  final:number=0;
    constructor() { }
  
    ngOnInit() {
    }
  addTotal()
  {
  this.total+=50;
  this.final=this.total+this.howMany;
  
  
  }
}

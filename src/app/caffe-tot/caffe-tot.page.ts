import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caffe-tot',
  templateUrl: './caffe-tot.page.html',
  styleUrls: ['./caffe-tot.page.scss'],
})
export class CaffeTotPage implements OnInit {
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

  print()
{
  window.print();
}
}

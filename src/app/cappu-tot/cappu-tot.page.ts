import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cappu-tot',
  templateUrl: './cappu-tot.page.html',
  styleUrls: ['./cappu-tot.page.scss'],
})
export class CappuTotPage implements OnInit {
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

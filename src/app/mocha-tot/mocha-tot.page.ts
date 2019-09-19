import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mocha-tot',
  templateUrl: './mocha-tot.page.html',
  styleUrls: ['./mocha-tot.page.scss'],
})
export class MochaTotPage implements OnInit {
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

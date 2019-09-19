import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caffee',
  templateUrl: './caffee.page.html',
  styleUrls: ['./caffee.page.scss'],
})
export class CaffeePage implements OnInit {
  total: number=50;

  constructor() { }

  ngOnInit() {
  }
  add()
  {
    this.total+=8;
  }

  add1()
  {
    this.total+=12;
  }

  add2()
  {
    this.total+=5;
    
  }
  print()
  {
    window.print();
  }
}

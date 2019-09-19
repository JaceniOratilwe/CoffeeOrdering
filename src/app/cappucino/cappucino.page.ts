import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cappucino',
  templateUrl: './cappucino.page.html',
  styleUrls: ['./cappucino.page.scss'],
})
export class CappucinoPage implements OnInit {

  total:number=50;

  constructor(private router:Router,private route:ActivatedRoute) { }

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

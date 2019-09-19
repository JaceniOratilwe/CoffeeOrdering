import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mocha',
  templateUrl: './mocha.page.html',
  styleUrls: ['./mocha.page.scss'],
})
export class MochaPage implements OnInit {
total:number=50;
vanilla:boolean;
milk:boolean;
cream:boolean;

  constructor(private router:Router,private route:ActivatedRoute) { }

  add()
  {
    this.total+=12;
    
  }

  add1()
  {
    this.total+=5;
  }

  add2()
  {
    
    this.total+=8;
    
  }
  ngOnInit() {
    this.vanilla==false;
    this.cream==false;
    this.milk==false;
    this.total==50;
  }
  
  print()
  {
    window.print();
  }
}


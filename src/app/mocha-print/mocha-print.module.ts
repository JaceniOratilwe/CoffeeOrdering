import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MochaPrintPage } from './mocha-print.page';

const routes: Routes = [
  {
    path: '',
    component: MochaPrintPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MochaPrintPage]
})
export class MochaPrintPageModule {}

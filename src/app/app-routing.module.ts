import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)},
  { path: 'info', loadChildren: './info/info.module#InfoPageModule' },
  { path: 'mocha', loadChildren: './mocha/mocha.module#MochaPageModule' },
  { path: 'mocha-tot', loadChildren: './mocha-tot/mocha-tot.module#MochaTotPageModule' },
  { path: 'cappu-tot', loadChildren: './cappu-tot/cappu-tot.module#CappuTotPageModule' },
  { path: 'cappucino', loadChildren: './cappucino/cappucino.module#CappucinoPageModule' },
  { path: 'caffe-tot', loadChildren: './caffe-tot/caffe-tot.module#CaffeTotPageModule' },
  { path: 'caffee', loadChildren: './caffee/caffee.module#CaffeePageModule' },
  { path: 'italian-tot', loadChildren: './italian-tot/italian-tot.module#ItalianTotPageModule' },
  { path: 'italian', loadChildren: './italian/italian.module#ItalianPageModule' },
  { path: 'mocha-print', loadChildren: './mocha-print/mocha-print.module#MochaPrintPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

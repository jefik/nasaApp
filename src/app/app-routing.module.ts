import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import {DayPage} from '../app/pages/day/day.page';
import {NasaPage} from '../app/pages/nasa/nasa.page';
import {HomePage} from '../app/pages/home/home.page';
import {SavedPage} from '../app/pages/saved/saved.page';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  
  {
    
    path: 'nasa',
    loadChildren: () => import('./pages/nasa/nasa.module').then( m => m.NasaPageModule),
    component: NasaPage
  },
  {
    path: 'splashscreen',
    loadChildren: () => import('./pages/splashscreen/splashscreen.module').then( m => m.SplashscreenPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule),
    component: HomePage
  },
  {
    path: 'day',
    loadChildren: () => import('./pages/day/day.module').then( m => m.DayPageModule),
    component: DayPage
  },
  {
    path: 'saved',
    loadChildren: () => import('./pages/saved/saved.module').then( m => m.SavedPageModule),
    component: SavedPage
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

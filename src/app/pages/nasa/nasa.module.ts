import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NasaPageRoutingModule } from './nasa-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { NasaPage } from './nasa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NasaPageRoutingModule,
    
    
  ],
  declarations: [NasaPage]
})
export class NasaPageModule {}

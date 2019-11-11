import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';
import { MetalsPage } from './metals.page';
import { MetalItemComponent } from './metal-item/metal-item.component';



const routes: Routes = [
  {
    path: '',
    component: MetalsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MetalsPage, MetalItemComponent]
})
export class MetalsPageModule { }

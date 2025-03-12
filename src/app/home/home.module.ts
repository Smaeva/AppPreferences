import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Required for ngModel
import { IonicModule } from '@ionic/angular'; // ✅ Required for Ionic components

import { HomePage } from './home.page';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,  // ✅ Add this
    IonicModule,  // ✅ Add this
    RouterModule.forChild([{ path: '', component: HomePage }])
  ],
  declarations: [HomePage]
})
export class HomePageModule { }

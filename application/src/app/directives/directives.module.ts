import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { DirectivesWrapComponent } from './directives-wrap/directives-wrap.component';


const routes: Routes = [{ path: '', component: DirectivesWrapComponent }];

@NgModule({
  declarations: [DirectivesWrapComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class DirectivesModule {}

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { ServicesWrapComponent } from './services-wrap/services-wrap.component';

const routes: Routes = [{ path: '', component: ServicesWrapComponent }];

@NgModule({
  declarations: [ServicesWrapComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ServicesModule {}

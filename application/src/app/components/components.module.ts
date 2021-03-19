import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { AccordionComponent } from './accordion/accordion.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { StarRatingsComponent } from './star-ratings/star-ratings.component';
import { WrapComponent } from './wrap/wrap.component';

const routes: Routes = [{ path: '', component: WrapComponent }];

@NgModule({
  declarations: [
    ProgressBarComponent,
    AccordionComponent,
    StarRatingsComponent,
    WrapComponent,
  ],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class ComponentsModule {}

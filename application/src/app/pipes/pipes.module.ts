import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

import { PipesWrapComponent } from './pipes-wrap/pipes-wrap.component';
import { TruncatePipe } from './truncate/truncate.pipe';

const routes: Routes = [{ path: '', component: PipesWrapComponent }];

@NgModule({
  declarations: [PipesWrapComponent, TruncatePipe],
  imports: [CommonModule, SharedModule, RouterModule.forChild(routes)],
})
export class PipesModule {}

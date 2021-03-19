import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CardComponent } from './components/card/card.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { TopOfPageComponent } from './components/top-of-page/top-of-page.component';


@NgModule({
  declarations: [CardComponent, TopOfPageComponent, ToolbarComponent],
  imports: [
    CommonModule
  ],
  exports: [CardComponent, TopOfPageComponent, ToolbarComponent]
})
export class SharedModule { }

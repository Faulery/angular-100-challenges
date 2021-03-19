import { ViewportScroller } from '@angular/common';
import {
  ChangeDetectionStrategy,
  Component,
  HostListener,
} from '@angular/core';

@Component({
  selector: 'app-top-of-page',
  templateUrl: './top-of-page.component.html',
  styleUrls: ['./top-of-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TopOfPageComponent {
  public isShown: boolean = false;

  @HostListener('window:scroll') onWindowScroll() {
    const yCoordinate = this.viewportScroller.getScrollPosition()[1];
    this.isShown = yCoordinate > 100;
  }

  constructor(private viewportScroller: ViewportScroller) {}

  public scrollTop(): void {
    this.viewportScroller.scrollToPosition([0, 0]);
  }
}

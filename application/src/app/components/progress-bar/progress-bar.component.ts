import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressBarComponent {
  @Input() public value: number = 0;
  @Input() public maxValue: number = 100;
}

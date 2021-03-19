import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-star-ratings',
  templateUrl: './star-ratings.component.html',
  styleUrls: ['./star-ratings.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StarRatingsComponent {
  @Input() rating: number = 0;
  @Input() highestRating: number;

  public get fullStars(): number[] {
    return new Array(Math.floor(this.rating)).fill(0);
  }

  public get hasHalfStar(): boolean {
    return (
      this.rating - Math.floor(this.rating) >= 0.5 &&
      this.rating !== this.highestRating
    );
  }

  public get emptyStars(): number[] {
    return new Array(Math.floor(this.highestRating - this.rating)).fill(0);
  }
}

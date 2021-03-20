import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate'
})
export class TruncatePipe implements PipeTransform {

  transform(value: string, params: { limit: number, postSigns: string }): string {
    let availableCharacters = value.slice(0, params.limit);
    if (value.length > params.limit) {
      availableCharacters += params.postSigns;
    }

    return availableCharacters;
  }
}

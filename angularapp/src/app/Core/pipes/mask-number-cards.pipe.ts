import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskNumberCards'
})
export class MaskNumberCardsPipe implements PipeTransform {

  transform(numCard: string): string {
    if (numCard) {
      const split = numCard.split(/([0-9]{4})/g)
      return split.filter(e => e !== '').join('-')
    }
    return numCard;
  }

}

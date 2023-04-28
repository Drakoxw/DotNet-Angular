import { Pipe, PipeTransform } from '@angular/core';
import { CreditCardResponse } from 'src/app/Models/Interfaces';
import { filterTable } from 'src/app/utils';

@Pipe({
  name: 'filterCards'
})
export class FilterCardsPipe implements PipeTransform {

  transform(cards: CreditCardResponse[], page: number = 0, filter = '', total = 5 ): CreditCardResponse[] {
    if (filter) {
      return filterTable(cards, filter, 0, 100);
    }
    if (cards && cards.length > 0) {
      const paged = page > 0 ? page * total : page
      return filterTable(cards, '', paged, total);
    }
    return cards
  }

}

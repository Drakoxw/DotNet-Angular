import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CreditCardResponse } from 'src/app/Models/Interfaces';

@Component({
  selector: 'app-card-table-footer',
  templateUrl: './card-table-footer.component.html',
  styleUrls: ['./card-table-footer.component.css']
})
export class CardTableFooterComponent {
  @Output() next = new EventEmitter<void>();
  @Output() prev = new EventEmitter<void>();
  @Input() page!: number;
  @Input() total!: number;
  @Input() set totalData(t: number) {
    this.allData = t
  }
  @Input() set totalRows(rows: CreditCardResponse[]) {
    if (rows && rows.length > 0) {
      this.totalShow = rows.length
    } else { this.totalShow = 0 }
  }
  totalShow: number = 0
  allData: number = 0

  nextPage() {
    if (this.allData > (this.page + 1) * this.total) {
      return this.next.emit()
    }
  }

  prevPage() {
    if (this.page > 0) {
      this.prev.emit()
    }
  }

}

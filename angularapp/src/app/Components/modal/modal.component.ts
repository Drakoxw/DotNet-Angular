import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  @Output() closeModal = new EventEmitter<boolean>();
  @Input() title?:string = 'Titulo modal'
  @Input() widthClass?:string = 'w-96'
  @Input() set showModal(b: boolean) {
    this.show = b
  }

  show: boolean = false
  constructor() { }

}

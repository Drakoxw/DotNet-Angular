import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  disableButton:boolean = false
  load:boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  log(ev: any) {
    this.disableButton = true
    this.load = true
    console.log('loreclick', ev)
  }

}

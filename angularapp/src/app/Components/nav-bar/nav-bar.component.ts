import { Component, OnInit } from '@angular/core';

import { RoutesPath } from '../../Constants/routes'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  routes = RoutesPath

  constructor() { }

  ngOnInit(): void {
  }

}

import { Component, OnInit } from '@angular/core';

import { RoutesPath } from '../../Constants/routes'

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent{

  routes = RoutesPath

  showMenu: boolean = false

  routeActiveClass = 'block py-2 pl-3 pr-4 text-white bg-blue-700 rounded'

  routeNoactiveClass = 'block py-2 pl-3 pr-4 text-gray-900 rounded bg-gray-50 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'

  ToogleMenu() {
    setTimeout(() => this.showMenu = !this.showMenu, 150)
  }

}

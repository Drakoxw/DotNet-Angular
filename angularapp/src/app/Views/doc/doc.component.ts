import { Component } from '@angular/core';

type Size = 'xsm' | 'sm' | 'base' | 'lg' | 'xlg'

@Component({
  selector: 'app-doc',
  templateUrl: './doc.component.html',
  styleUrls: ['./doc.component.css']
})
export class DocComponent {

  sizes: Size[] = ['xsm', 'sm', 'base', 'lg', 'xlg']
  size: Size = 'base'

}

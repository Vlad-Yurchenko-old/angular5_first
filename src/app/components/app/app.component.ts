import {Component, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css',
    '../../../assets/css/bootstrap-grid.min.css',
    '../../../assets/css/style.css',
    '../../../assets/css/normalize.css'
  ],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'Tour of Heroes';
}

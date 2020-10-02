import { Component } from '@angular/core';
import { faFileArchive } from '@fortawesome/free-regular-svg-icons'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  faFileArchive = faFileArchive;
  title = 'Genesys Character Creator';
}

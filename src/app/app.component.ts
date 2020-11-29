import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  name = 'Andrej';
  surname = 'Godec';
  year = new Date().getFullYear();
}

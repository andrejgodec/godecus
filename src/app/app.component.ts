import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = "Andrej";
  surname = "Godec";

  currentTab = 'about';
  onNav(tab: string){
      this.currentTab = tab;
  }
;}

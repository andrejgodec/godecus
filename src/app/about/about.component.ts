import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name = 'Andrej';
  surname = 'Godec';
  email = 'andrej.godec0@gmail.com';
  location = 'Izola, Slovenia'
  position = 'Software engineer';

  constructor() { }

  ngOnInit() {
  }

}

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {
  university = ['UP', 'UM', 'SALERNO' ];
  //university = { famnit, feri};
  famnit = {university: "Univerza na Primorskem", department: "FAMNIT", duartion: "3"};
  feri = {university: "Univerza v Mariboru", department: "FERI", duartion: "4"};

  department = ['FAMNIT', 'FERI', 'SALERNO'];

  constructor() { }

  ngOnInit() {
  }

}

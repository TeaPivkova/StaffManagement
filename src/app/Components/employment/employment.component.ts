import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  selected = true;
  constructor() { }

  isSelected(){
    this.selected = !this.selected;
  }
  ngOnInit(): void {

  }

}

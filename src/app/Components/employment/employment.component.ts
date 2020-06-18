import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-employment',
  templateUrl: './employment.component.html',
  styleUrls: ['./employment.component.css']
})
export class EmploymentComponent implements OnInit {
  selected = true;
  constructor() { }

  isSelected1(){
    this.selected = true;
  }
  isSelected2(){
    this.selected = false;
  }
  ngOnInit(): void {

  }

}

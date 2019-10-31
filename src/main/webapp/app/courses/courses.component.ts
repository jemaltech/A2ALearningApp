import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['courses.component.scss']
})
export class CoursesComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'CoursesComponent message';
  }

  ngOnInit() {}
}

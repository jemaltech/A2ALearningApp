import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'ProjectsComponent message';
  }

  ngOnInit() {}
}

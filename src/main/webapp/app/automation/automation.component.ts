import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'jhi-automation',
  templateUrl: './automation.component.html',
  styleUrls: ['automation.component.scss']
})
export class AutomationComponent implements OnInit {
  message: string;

  constructor() {
    this.message = 'AutomationComponent message';
  }

  ngOnInit() {}
}

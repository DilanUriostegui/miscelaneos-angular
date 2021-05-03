import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-swtich',
  templateUrl: './ng-swtich.component.html',
  styles: [
  ]
})
export class NgSwtichComponent implements OnInit {

  alerta: string = "warning";

  constructor() { }

  ngOnInit(): void {
  }

}

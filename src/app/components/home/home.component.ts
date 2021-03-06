import { Component, OnInit, OnChanges, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    
    <app-ng-style></app-ng-style>
    <app-css></app-css>
    <app-clases></app-clases>
    <p [appResaltado]="'red'"> Hola mundo </p>
    <app-ng-swtich></app-ng-swtich>
  `,
  styles: [
  ]
})
export class HomeComponent implements OnInit, OnChanges, AfterContentInit,
          AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() { 
    console.log("constructor")
   }

  ngOnInit(){
    console.log("ngOnInit")
  }

  ngOnChanges(){
    console.log("ngOnChanges")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit")
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy")
  }

}

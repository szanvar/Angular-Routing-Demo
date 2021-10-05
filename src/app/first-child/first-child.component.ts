import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-child',
  template: `
  <button (click)="fun()"> Save </button>

   {{name}}
  `,
  styles: [
  ]
})
export class FirstChildComponent implements OnInit {

  constructor() { }

  public name : string = ""
  fun()
  {
    this.name = "Button Click";
  }

  ngOnInit(): void {
  }

}

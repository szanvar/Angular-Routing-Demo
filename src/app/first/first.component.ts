import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  template: `
   <h2> 
        Inside First Route 
   </h2>

   <nav>
    <a routerLink = '/First/FirstChild'> First Child </a>
   </nav>
   <router-outlet></router-outlet>
  `,
  styles: [
  ]
})
export class FirstComponent implements OnInit, OnDestroy {

  constructor() { }
 
  ngOnInit(): void 
  {
  }
  ngOnDestroy()
  {
    console.log("Inside ngOnDestroy ...");
    
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BlankComponent } from './blank/blank.component';
import { FirstChildComponent } from './first-child/first-child.component';

import { FirstComponent } from './first/first.component';
import { InvildComponent } from './invild/invild.component';
import { SecondComponent } from './second/second.component';

const routes: Routes = [
  {path : '', component : BlankComponent},

  {path : 'First', component : FirstComponent,
     children : [
       {path : 'FirstChild', component : FirstChildComponent}
     ]
  },

  {path : 'Second', component : SecondComponent},
  {path : '**', component : InvildComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

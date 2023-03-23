import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent/parent.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { Grandchild1Component } from './grandchild1/grandchild1.component';
import { Grandchild2Component } from './grandchild2/grandchild2.component';
import { Route, RouterModule } from '@angular/router';


const routes:Route[] = [
  {path:'',component:ParentComponent}
]


@NgModule({
  declarations: [
    ParentComponent,
    Child1Component,
    Child2Component,
    Grandchild1Component,
    Grandchild2Component,
  ],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class LifecycleHooksModule {}

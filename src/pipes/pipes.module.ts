import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipeConsumerComponent } from './pipe-consumer/pipe-consumer.component';
import { HighlightDirective } from './highlight.directive';



@NgModule({
  declarations: [
    PipeConsumerComponent,
    HighlightDirective
  ],
  imports: [
    CommonModule
  ]
})
export class PipesModule { }

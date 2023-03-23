import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-child1',
  templateUrl: './child1.component.html',
  styleUrls: ['./child1.component.css'],
})
export class Child1Component
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked
{
  constructor() {
    console.log('Child1Component constructor called');
  }
  ngAfterViewInit(): void {
    console.log('Child1Component ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('Child1Component ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('Child1Component ngOnDestroy called');
  }
  ngAfterContentInit(): void {
    console.log('Child1Component ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('Child1Component ngAfterContentChecked called');
  }

  ngOnInit(): void {
    console.log('Child1Component ngOninit called');
  }
}

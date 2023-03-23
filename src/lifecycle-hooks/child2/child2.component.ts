import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements
OnInit,
AfterViewInit,
AfterViewChecked,
OnDestroy,
AfterContentInit,
AfterContentChecked
{
  constructor() {
    console.log('Child2Component constructor called');
  }
ngAfterViewInit(): void {
console.log('Child2Component ngAfterViewInit called');
}
ngAfterViewChecked(): void {
console.log('Child2Component ngAfterViewChecked called');
}
ngOnDestroy(): void {
console.log('Child2Component ngOnDestroy called');
}
ngAfterContentInit(): void {
console.log('Child2Component ngAfterContentInit called');
}
ngAfterContentChecked(): void {
console.log('Child2Component ngAfterContentChecked called');
}

ngOnInit(): void {
console.log('Child2Component ngOninit called');
}
}

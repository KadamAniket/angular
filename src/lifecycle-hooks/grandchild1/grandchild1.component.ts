import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild1',
  templateUrl: './grandchild1.component.html',
  styleUrls: ['./grandchild1.component.css']
})
export class Grandchild1Component implements
OnInit,
AfterViewInit,
AfterViewChecked,
OnDestroy,
AfterContentInit,
AfterContentChecked
{
  constructor() {
    console.log('Grandchild1Component constructor called');
  }
ngAfterViewInit(): void {
console.log('Grandchild1Component ngAfterViewInit called');
}
ngAfterViewChecked(): void {
console.log('Grandchild1Component ngAfterViewChecked called');
}
ngOnDestroy(): void {
console.log('Grandchild1Component ngOnDestroy called');
}
ngAfterContentInit(): void {
console.log('Grandchild1Component ngAfterContentInit called');
}
ngAfterContentChecked(): void {
console.log('Grandchild1Component ngAfterContentChecked called');
}

ngOnInit(): void {
console.log('Grandchild1Component ngOninit called');
}
}

import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-grandchild2',
  templateUrl: './grandchild2.component.html',
  styleUrls: ['./grandchild2.component.css']
})
export class Grandchild2Component implements
OnInit,
AfterViewInit,
AfterViewChecked,
OnDestroy,
AfterContentInit,
AfterContentChecked
{
  constructor() {
    console.log('Grandchild2Component constructor called');
  }
ngAfterViewInit(): void {
console.log('Grandchild2Component ngAfterViewInit called');
}
ngAfterViewChecked(): void {
console.log('Grandchild2Component ngAfterViewChecked called');
}
ngOnDestroy(): void {
console.log('Grandchild2Component ngOnDestroy called');
}
ngAfterContentInit(): void {
console.log('Grandchild2Component ngAfterContentInit called');
}
ngAfterContentChecked(): void {
console.log('Grandchild2Component ngAfterContentChecked called');
}

ngOnInit(): void {
console.log('Grandchild2Component ngOninit called');
}
}

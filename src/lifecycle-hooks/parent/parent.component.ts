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
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent
  implements
    OnInit,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy,
    AfterContentInit,
    AfterContentChecked
{
  constructor() {
    console.log('Parent constructor called');
  }


  ngAfterViewInit(): void {
    console.log('Parent ngAfterViewInit called');
  }
  ngAfterViewChecked(): void {
    console.log('Parent ngAfterViewChecked called');
  }
  ngOnDestroy(): void {
    console.log('Parent ngOnDestroy called');
  }
  ngAfterContentInit(): void {
    console.log('Parent ngAfterContentInit called');
  }
  ngAfterContentChecked(): void {
    console.log('Parent ngAfterContentChecked called');
  }

  ngOnInit(): void {
    console.log('Parent ngOninit called');
  }
}

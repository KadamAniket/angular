import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PipeConsumerComponent } from './pipe-consumer.component';

describe('PipeConsumerComponent', () => {
  let component: PipeConsumerComponent;
  let fixture: ComponentFixture<PipeConsumerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PipeConsumerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PipeConsumerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

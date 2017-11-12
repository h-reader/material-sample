import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCurrryComponent } from './order-currry.component';

describe('OrderCurrryComponent', () => {
  let component: OrderCurrryComponent;
  let fixture: ComponentFixture<OrderCurrryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCurrryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCurrryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

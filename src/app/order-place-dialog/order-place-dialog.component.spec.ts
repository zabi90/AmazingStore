import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPlaceDialogComponent } from './order-place-dialog.component';

describe('OrderPlaceDialogComponent', () => {
  let component: OrderPlaceDialogComponent;
  let fixture: ComponentFixture<OrderPlaceDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPlaceDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderPlaceDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

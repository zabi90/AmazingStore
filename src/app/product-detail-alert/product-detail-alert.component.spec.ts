import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductDetailAlertComponent } from './product-detail-alert.component';

describe('ProductDetailAlertComponent', () => {
  let component: ProductDetailAlertComponent;
  let fixture: ComponentFixture<ProductDetailAlertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductDetailAlertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductDetailAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

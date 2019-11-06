import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerBusinessManagerComponent } from './customer-business-manager.component';

describe('CustomerBusinessManagerComponent', () => {
  let component: CustomerBusinessManagerComponent;
  let fixture: ComponentFixture<CustomerBusinessManagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomerBusinessManagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerBusinessManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

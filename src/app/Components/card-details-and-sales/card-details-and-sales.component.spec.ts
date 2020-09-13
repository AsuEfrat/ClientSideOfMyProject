import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardDetailsAndSalesComponent } from './card-details-and-sales.component';

describe('CardDetailsAndSalesComponent', () => {
  let component: CardDetailsAndSalesComponent;
  let fixture: ComponentFixture<CardDetailsAndSalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardDetailsAndSalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardDetailsAndSalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

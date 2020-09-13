import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CardOwnerComponent } from './card-owner.component';

describe('CardOwnerComponent', () => {
  let component: CardOwnerComponent;
  let fixture: ComponentFixture<CardOwnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CardOwnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CardOwnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

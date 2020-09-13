import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddChainsToDreamCardComponent } from './add-chains-to-dream-card.component';

describe('AddChainsToDreamCardComponent', () => {
  let component: AddChainsToDreamCardComponent;
  let fixture: ComponentFixture<AddChainsToDreamCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddChainsToDreamCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddChainsToDreamCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

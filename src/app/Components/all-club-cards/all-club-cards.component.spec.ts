import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClubCardsComponent } from './all-club-cards.component';

describe('AllClubCardsComponent', () => {
  let component: AllClubCardsComponent;
  let fixture: ComponentFixture<AllClubCardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClubCardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClubCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

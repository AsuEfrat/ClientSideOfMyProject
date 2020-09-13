import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCardsListComponent } from './my-cards-list.component';

describe('MyCardsListComponent', () => {
  let component: MyCardsListComponent;
  let fixture: ComponentFixture<MyCardsListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCardsListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCardsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserPersonalHomePageComponent } from './user-personal-home-page.component';

describe('UserPersonalHomePageComponent', () => {
  let component: UserPersonalHomePageComponent;
  let fixture: ComponentFixture<UserPersonalHomePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserPersonalHomePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserPersonalHomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

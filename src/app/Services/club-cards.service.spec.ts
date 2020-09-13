import { TestBed } from '@angular/core/testing';

import { ClubCardsService } from './club-cards.service';

describe('ClubCardsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubCardsService = TestBed.get(ClubCardsService);
    expect(service).toBeTruthy();
  });
});

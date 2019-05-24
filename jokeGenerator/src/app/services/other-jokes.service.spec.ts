import { TestBed } from '@angular/core/testing';

import { OtherJokesService } from './other-jokes.service';

describe('OtherJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OtherJokesService = TestBed.get(OtherJokesService);
    expect(service).toBeTruthy();
  });
});

import { TestBed } from '@angular/core/testing';

import { ChuckJokesService } from './chuck-jokes.service';

describe('ChuckJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChuckJokesService = TestBed.get(ChuckJokesService);
    expect(service).toBeTruthy();
  });
});

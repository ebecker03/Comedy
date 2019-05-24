import { TestBed } from '@angular/core/testing';

import { DadJokesService } from './dad-jokes.service';

describe('DadJokesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DadJokesService = TestBed.get(DadJokesService);
    expect(service).toBeTruthy();
  });
});

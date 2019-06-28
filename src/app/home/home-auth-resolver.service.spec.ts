import { TestBed } from '@angular/core/testing';

import { HomeAuthResolver } from './home-auth-resolver.service';

describe('HomeAuthResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HomeAuthResolver = TestBed.get(HomeAuthResolver);
    expect(service).toBeTruthy();
  });
});

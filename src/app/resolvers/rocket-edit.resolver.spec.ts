import { TestBed } from '@angular/core/testing';

import { RocketEditResolver } from './rocket-edit.resolver';

describe('RocketEditResolver', () => {
  let resolver: RocketEditResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(RocketEditResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});

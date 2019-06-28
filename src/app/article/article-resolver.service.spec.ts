import { TestBed } from '@angular/core/testing';

import { ArticleResolver } from './article-resolver.service';

describe('ArticleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ArticleResolver = TestBed.get(ArticleResolver);
    expect(service).toBeTruthy();
  });
});

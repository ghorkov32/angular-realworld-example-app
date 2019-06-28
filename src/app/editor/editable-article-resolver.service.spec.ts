import { TestBed } from '@angular/core/testing';

import { EditableArticleResolver } from './editable-article-resolver.service';

describe('EditableArticleResolverService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EditableArticleResolver = TestBed.get(EditableArticleResolver);
    expect(service).toBeTruthy();
  });
});

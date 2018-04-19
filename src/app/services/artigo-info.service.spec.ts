import { TestBed, inject } from '@angular/core/testing';

import { ArtigoInfoService } from './artigo-info.service';

describe('ArtigoInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ArtigoInfoService]
    });
  });

  it('should be created', inject([ArtigoInfoService], (service: ArtigoInfoService) => {
    expect(service).toBeTruthy();
  }));
});

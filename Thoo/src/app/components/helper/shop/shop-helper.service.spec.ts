import { TestBed } from '@angular/core/testing';

import { ShopHelperService } from './shop-helper.service';

describe('ShopHelperService', () => {
  let service: ShopHelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShopHelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

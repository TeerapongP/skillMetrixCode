import { TestBed } from '@angular/core/testing';

import { MyHerosServiceService } from './my-heros-service.service';

describe('MyHerosServiceService', () => {
  let service: MyHerosServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHerosServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

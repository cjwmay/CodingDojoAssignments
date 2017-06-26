import { TestBed, inject } from '@angular/core/testing';

import { BattleserviceService } from './battleservice.service';

describe('BattleserviceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BattleserviceService]
    });
  });

  it('should be created', inject([BattleserviceService], (service: BattleserviceService) => {
    expect(service).toBeTruthy();
  }));
});

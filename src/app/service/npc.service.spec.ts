import { TestBed, inject } from '@angular/core/testing';
import { NpcService } from './npc.service';

describe('NpcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NpcService]
    });
  });

  it('should ...', inject([NpcService], (service: NpcService) => {
    expect(service).toBeTruthy();
  }));
});

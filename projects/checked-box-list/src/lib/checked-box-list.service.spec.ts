import { TestBed } from '@angular/core/testing';

import { CheckedBoxListService } from './checked-box-list.service';

describe('CheckedBoxListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckedBoxListService = TestBed.get(CheckedBoxListService);
    expect(service).toBeTruthy();
  });
});

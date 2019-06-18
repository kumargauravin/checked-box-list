import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckedBoxListComponent } from './checked-box-list.component';

describe('CheckedBoxListComponent', () => {
  let component: CheckedBoxListComponent;
  let fixture: ComponentFixture<CheckedBoxListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckedBoxListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckedBoxListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

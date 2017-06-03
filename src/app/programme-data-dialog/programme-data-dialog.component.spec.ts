import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgrammeDataDialogComponent } from './programme-data-dialog.component';

describe('ProgrammeDataDialogComponent', () => {
  let component: ProgrammeDataDialogComponent;
  let fixture: ComponentFixture<ProgrammeDataDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProgrammeDataDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgrammeDataDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

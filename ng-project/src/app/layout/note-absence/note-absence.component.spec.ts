import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteAbsenceComponent } from './note-absence.component';

describe('NoteAbsenceComponent', () => {
  let component: NoteAbsenceComponent;
  let fixture: ComponentFixture<NoteAbsenceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoteAbsenceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoteAbsenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

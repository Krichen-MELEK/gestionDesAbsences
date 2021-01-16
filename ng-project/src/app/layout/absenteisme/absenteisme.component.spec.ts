import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbsenteismeComponent } from './absenteisme.component';

describe('AbsenteismeComponent', () => {
  let component: AbsenteismeComponent;
  let fixture: ComponentFixture<AbsenteismeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbsenteismeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbsenteismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

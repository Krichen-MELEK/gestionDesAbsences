import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiComponent } from './emploi.component';

describe('EmploiComponent', () => {
  let component: EmploiComponent;
  let fixture: ComponentFixture<EmploiComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

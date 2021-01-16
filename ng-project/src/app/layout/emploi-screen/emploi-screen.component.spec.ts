import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploiScreenComponent } from './emploi-screen.component';

describe('EmploiScreenComponent', () => {
  let component: EmploiScreenComponent;
  let fixture: ComponentFixture<EmploiScreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploiScreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploiScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

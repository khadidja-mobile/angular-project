import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionCalculetteComponent } from './correction-calculette.component';

describe('CorrectionCalculetteComponent', () => {
  let component: CorrectionCalculetteComponent;
  let fixture: ComponentFixture<CorrectionCalculetteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionCalculetteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionCalculetteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

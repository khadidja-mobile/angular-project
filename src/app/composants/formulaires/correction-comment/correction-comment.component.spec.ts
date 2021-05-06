import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CorrectionCommentComponent } from './correction-comment.component';

describe('CorrectionCommentComponent', () => {
  let component: CorrectionCommentComponent;
  let fixture: ComponentFixture<CorrectionCommentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CorrectionCommentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CorrectionCommentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LabeltagComponent } from './labeltag.component';

describe('LabeltagComponent', () => {
  let component: LabeltagComponent;
  let fixture: ComponentFixture<LabeltagComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LabeltagComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LabeltagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

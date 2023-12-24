import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurpromiseComponent } from './ourpromise.component';

describe('OurpromiseComponent', () => {
  let component: OurpromiseComponent;
  let fixture: ComponentFixture<OurpromiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OurpromiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(OurpromiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

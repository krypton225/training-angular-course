import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOutputChildComponent } from './at-output-child.component';

describe('AtOutputChildComponent', () => {
  let component: AtOutputChildComponent;
  let fixture: ComponentFixture<AtOutputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtOutputChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOutputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

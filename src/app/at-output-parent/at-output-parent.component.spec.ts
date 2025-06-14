import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOutputParentComponent } from './at-output-parent.component';

describe('AtOutputParentComponent', () => {
  let component: AtOutputParentComponent;
  let fixture: ComponentFixture<AtOutputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtOutputParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOutputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtInputParentComponent } from './at-input-parent.component';

describe('AtInputParentComponent', () => {
  let component: AtInputParentComponent;
  let fixture: ComponentFixture<AtInputParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtInputParentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtInputParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

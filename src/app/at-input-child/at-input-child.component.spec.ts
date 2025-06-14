import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtInputChildComponent } from './at-input-child.component';

describe('AtInputChildComponent', () => {
  let component: AtInputChildComponent;
  let fixture: ComponentFixture<AtInputChildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtInputChildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtInputChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

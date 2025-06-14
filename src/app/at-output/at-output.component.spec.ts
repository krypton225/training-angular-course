import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtOutputComponent } from './at-output.component';

describe('AtOutputComponent', () => {
  let component: AtOutputComponent;
  let fixture: ComponentFixture<AtOutputComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AtOutputComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtOutputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingPageComponent } from './two-binding-page.component';

describe('TwoBindingPageComponent', () => {
  let component: TwoBindingPageComponent;
  let fixture: ComponentFixture<TwoBindingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBindingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

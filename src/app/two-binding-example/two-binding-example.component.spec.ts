import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoBindingExampleComponent } from './two-binding-example.component';

describe('TwoBindingExampleComponent', () => {
  let component: TwoBindingExampleComponent;
  let fixture: ComponentFixture<TwoBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoBindingExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

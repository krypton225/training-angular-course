import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBindingExampleComponent } from './one-binding-example.component';

describe('OneBindingExampleComponent', () => {
  let component: OneBindingExampleComponent;
  let fixture: ComponentFixture<OneBindingExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneBindingExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBindingExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

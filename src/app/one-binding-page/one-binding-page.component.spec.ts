import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OneBindingPageComponent } from './one-binding-page.component';

describe('OneBindingPageComponent', () => {
  let component: OneBindingPageComponent;
  let fixture: ComponentFixture<OneBindingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneBindingPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneBindingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

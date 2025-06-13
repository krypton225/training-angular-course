import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVarRefComponent } from './template-var-ref.component';

describe('TemplateVarRefComponent', () => {
  let component: TemplateVarRefComponent;
  let fixture: ComponentFixture<TemplateVarRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVarRefComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateVarRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

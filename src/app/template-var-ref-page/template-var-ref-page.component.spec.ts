import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateVarRefPageComponent } from './template-var-ref-page.component';

describe('TemplateVarRefPageComponent', () => {
  let component: TemplateVarRefPageComponent;
  let fixture: ComponentFixture<TemplateVarRefPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TemplateVarRefPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TemplateVarRefPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

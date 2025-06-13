import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewChildrenExampleComponent } from './view-children-example.component';

describe('ViewChildrenExampleComponent', () => {
  let component: ViewChildrenExampleComponent;
  let fixture: ComponentFixture<ViewChildrenExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewChildrenExampleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewChildrenExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmploymentTermsComponent } from './employment-terms.component';

describe('EmploymentTermsComponent', () => {
  let component: EmploymentTermsComponent;
  let fixture: ComponentFixture<EmploymentTermsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmploymentTermsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmploymentTermsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

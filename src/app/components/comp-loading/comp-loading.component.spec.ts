import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompLoadingComponent } from './comp-loading.component';

describe('CompLoadingComponent', () => {
  let component: CompLoadingComponent;
  let fixture: ComponentFixture<CompLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompLoadingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

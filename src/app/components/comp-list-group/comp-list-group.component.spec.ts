import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompListGroupComponent } from './comp-list-group.component';

describe('CompListGroupComponent', () => {
  let component: CompListGroupComponent;
  let fixture: ComponentFixture<CompListGroupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompListGroupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompListGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompCarouselComponent } from './comp-carousel.component';

describe('CompCarouselComponent', () => {
  let component: CompCarouselComponent;
  let fixture: ComponentFixture<CompCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

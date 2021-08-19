import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePokemonComponent } from './page-pokemon.component';

describe('PagePokemonComponent', () => {
  let component: PagePokemonComponent;
  let fixture: ComponentFixture<PagePokemonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePokemonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

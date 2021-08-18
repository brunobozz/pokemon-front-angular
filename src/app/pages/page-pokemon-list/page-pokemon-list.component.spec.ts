import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagePokemonListComponent } from './page-pokemon-list.component';

describe('PagePokemonListComponent', () => {
  let component: PagePokemonListComponent;
  let fixture: ComponentFixture<PagePokemonListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagePokemonListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagePokemonListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

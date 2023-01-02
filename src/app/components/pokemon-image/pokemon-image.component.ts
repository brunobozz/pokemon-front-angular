import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-image',
  templateUrl: './pokemon-image.component.html',
  styleUrls: ['./pokemon-image.component.scss'],
})
export class PokemonImageComponent {
  @Input() id: number = 0;
  @Input() type: string = '';
  public imageId = '';

  ngOnChanges(): void {
    this.convertId(this.id);
  }

  private convertId(id: number) {
    let strId = id.toString();
    if (strId.length === 1) {
      this.imageId = '00' + strId;
    }
    if (strId.length === 2) {
      this.imageId = '0' + strId;
    }
    if (strId.length === 3) {
      this.imageId = strId;
    }
  }
}

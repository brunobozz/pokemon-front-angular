import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-name',
  templateUrl: './pokemon-name.component.html',
  styleUrls: ['./pokemon-name.component.scss'],
})
export class PokemonNameComponent {
  @Input() id: string = '';
  @Input() name: string = '';
  @Input() type: string = '';
}

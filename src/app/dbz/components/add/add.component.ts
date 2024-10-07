import { Component, EventEmitter, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-add',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  public emitirNuevoPersonaje: EventEmitter<Personaje> = new EventEmitter();

  public personaje: Personaje = {
    name: '',
    power: 0
  };

  emitirPersonaje():void {
    if (this.personaje.name.length === 0) return;
    this.emitirNuevoPersonaje.emit(this.personaje);

    this.personaje = { name: '', power: 0 }
  }

}

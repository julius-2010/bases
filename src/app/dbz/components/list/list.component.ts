import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Personaje } from '../../interfaces/personaje.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public lsPersonajes: Personaje[] = []

  @Output()
  public emitirIdPersonaje: EventEmitter<string> = new EventEmitter();

  Eliminar(id?: string):void{
    if(!id) return;
    this.emitirIdPersonaje.emit(id);
  }
}

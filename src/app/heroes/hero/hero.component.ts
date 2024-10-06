import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public nombre: string = 'Brayan';
  public edad:   number = 26;

  get capitalizedName() : string {{
    return this.nombre.toUpperCase();
  }}

   getDescription() : string {
    return `${ this.nombre } - ${ this.edad }`;
  }

  changeName():void{
    this.nombre = 'Julius';
  }

  changeAge():void{
    this.edad = 30;
  }

  showButtonName(): boolean{
     return false;
  }

  resetForm(): void{
    this.nombre = 'Brayan';
    this.edad = 26;
  }
}

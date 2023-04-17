import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html',
  styles: [
  ]
})
export class SearchBoxComponent {
  /*
    Luego, dentro del componente shared-search-box, la propiedad placeholder está definida como una entrada
     (input) a través del decorador @Input(), lo que significa que el valor del atributo placeholder pasado 
     anteriormente se puede utilizar en el componente.
  */
  @Input()
  public placeholder: string = '';

  @Output()
  public onValue = new EventEmitter<string>();

  emitValue( value: string ):void {
    this.onValue.emit( value );
  }
  
  

}

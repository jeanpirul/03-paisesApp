import { Component } from '@angular/core';
import { Pais } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
})
export class PorCapitalComponent {
  termino: string = '';
  hayError: boolean = false;
  paises: Pais[] = [];

  constructor(private paisService: PaisService) {}

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarPais(termino).subscribe(
      (paises: any) => {
        this.paises = paises;
        console.log('paises:', paises);
        if (paises.status === 404) {
          this.hayError = true;
        }
      },
      (err) => {
        this.hayError = true;
        this.paises = [];
      }
    );
  }
}

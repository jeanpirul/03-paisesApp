import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PaisService } from '../../services/pais.service';
import { switchMap, tap } from 'rxjs/operators';
import { Pais } from '../../interfaces/pais.interface';
@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
})
export class VerPaisComponent implements OnInit {
  pais!: Pais;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
  ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({id}) => this.paisService.getPaisPorAlpha(id)),//desestructuracion para tener id del pais
      tap(console.log)
    )
    .subscribe(pais => {// espera paisuesta
      this.pais = pais;
    })

  }
}

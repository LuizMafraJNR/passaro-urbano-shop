import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';
import { Oferta } from '../shared/oferta.model';

@Component({
  selector: 'peixe-urbano-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [OfertasService], // array de classes de serviços
})
export class HomeComponent implements OnInit {
  public ofertas!: Array<Oferta>;

  constructor(private ofertasService: OfertasService) {}

  ngOnInit(): void {
    // this.ofertas = this.ofertasService.getOfertas()
    // console.log(this.ofertas)

    this.ofertasService
      .getOfertas2()
      .then((ofertas: Array<Oferta>) => {
        console.log("A função resolve foi resolvida depois de 3 segundos")
        //resolve
        this.ofertas = ofertas;
      }) // reject)
      .catch((param: any) => {
        console.log(param)
      })
  }
}

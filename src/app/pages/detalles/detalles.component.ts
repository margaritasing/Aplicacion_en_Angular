import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {

  detalles: any = '';

  constructor( private route: ActivatedRoute, public hs: HeroesService) {
    route.params.subscribe ( data => {
     hs.detalles( data ['id'])
     .subscribe ( res => {
       this.detalles = res;
       console.log(this.detalles);


     });

    });

   }

  ngOnInit() {
  }

}

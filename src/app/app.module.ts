import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { DetallesComponent } from './pages/detalles/detalles.component';
import { TituloPipe } from './pipes/titulo.pipe';

import { HttpClientModule } from '@angular/common/http';
import { OrdenarAparienciaPipe } from './pipes/ordenar-apariencia.pipe';
import { OrdenarNombrePipe } from './pipes/ordenar-nombre.pipe';
import { BuscarNombrePipe } from './pipes/buscar-nombre.pipe';
import { BuscarAparienciaPipe } from './pipes/buscar-apariencia.pipe';

import { FormsModule} from '@angular/forms';
import { QuirepnombrePipe } from './pipes/quirepnombre.pipe';
import { QuirepapaPipe } from './pipes/quirepapa.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesComponent,
    TituloPipe,
    OrdenarAparienciaPipe,
    OrdenarNombrePipe,
    BuscarNombrePipe,
    BuscarAparienciaPipe,
    QuirepnombrePipe,
    QuirepapaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

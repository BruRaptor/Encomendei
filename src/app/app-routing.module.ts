import { ContatoComponent } from './contato/contato.component';
import { InicioComponent } from './inicio/inicio.component';
import { OutroComponent } from './outro/outro.component';
import { FoneComponent } from './fone/fone.component';
import { AcessoriosComponent } from './acessorios/acessorios.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {path: '', redirectTo:'inicio', pathMatch: 'full'},

  {path:'inicio', component: InicioComponent},
  {path: 'acessorios', component: AcessoriosComponent},
  {path: 'fone', component: FoneComponent},
  {path: 'outro', component: OutroComponent},
  {path: 'contato', component: ContatoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

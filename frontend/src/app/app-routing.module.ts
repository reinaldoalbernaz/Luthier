import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './layouts/main/main.component';

const appRoutes: Routes = [
  {
    path: '',
    loadChildren: () => import('./core/core.module').then((m) => m.CoreModule),
  },
  {
    path: '',
    component: MainComponent,
    // canActivate: [AuthGuard],
    children: [
      { path: '', redirectTo: 'inicio', pathMatch: 'full' },
      {
        path: 'inicio',
        loadChildren: () =>
          import('./pages/inicio/inicio.module').then((m) => m.InicioModule),
      },
      {
        path: 'partituras',
        loadChildren: () =>
          import('./pages/partituras/partituras.module').then((m) => m.PartiturasModule),
      },
      // {
      //   path: 'gestao',
      //   data: {
      //     autoridades: [Autoridades.ADMIN, Autoridades.CADASTRO_CONSULTA],
      //   },
      //   canActivate: [ControleRotaGuard],
      //   loadChildren: () =>
      //     import('./pages/cadastro/cadastro.module').then(
      //       (m) => m.CadastroModule
      //     ),
      // },
    ],
  },
  { path: '404', redirectTo: '**', pathMatch: 'full' },
  // { path: '**', component: PaginaErroComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


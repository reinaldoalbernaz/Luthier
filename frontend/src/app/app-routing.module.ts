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
          path: 'cotacoes',
        loadChildren: () =>
          import('./pages/cotacoes/cotacoes.module').then((m) => m.CotacoesModule),
      },
      {
          path: 'produtos',
        loadChildren: () =>
            import('./pages/produtos/produtos.module').then((m) => m.ProdutosModule),
      },
      {
          path: 'clientes',
        loadChildren: () =>
            import('./pages/clientes/clientes.module').then((m) => m.ClientesModule),
      },
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


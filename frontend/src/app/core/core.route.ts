import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    { path: '', component: LoginComponent },
    // { path: 'criar-conta', component: CriarContaComponent },
    // { path: 'confirmacao/:codigo', component: AtivarContaComponent },
    // { path: 'esqueceu-senha', component: EsqueceuSenhaComponent },
    // { path: 'alterar-senha/:codigo', component: AlterarSenhaComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoreRoute {}

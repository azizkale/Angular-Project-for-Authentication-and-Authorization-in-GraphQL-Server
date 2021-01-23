import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { CrudoperationsComponent } from './crudoperations/crudoperations.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '', component: AppComponent },
  { path: 'app', component: AppComponent },
  { path: 'login', component: LoginComponent },
  { path: 'crud', component: CrudoperationsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

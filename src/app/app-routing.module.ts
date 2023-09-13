import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent } from './modules/admin/components/dogs/dogs.component';
import { authGuard } from './modules/security/auth/auth.guard';
import { LifeCycleComponent } from './modules/admin/components/life-cycle/life-cycle.component';
import { AngularMaterialsComponent } from './modules/admin/components/angular-materials/angular-materials.component';
import { AdminComponent } from './modules/admin/admin.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/validations', pathMatch: 'full' },
  { path: 'lifeCycle', component: LifeCycleComponent },
  { path: 'validations', component: AdminComponent },
  { path: 'materials', component: AngularMaterialsComponent },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/security/components/security.module').then(
        m => m.SecurityModule
      )
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

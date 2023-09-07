import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DogsComponent } from './modules/admin/components/dogs/dogs.component';
import { authGuard } from './modules/security/auth/auth.guard';
import { AdminComponent } from './modules/admin/components/admin.component';
import { LifeCycleComponent } from './modules/admin/components/life-cycle/life-cycle.component';

const routes: Routes = [
  {
    path: 'dogs',
    component: DogsComponent,
    canActivate: [authGuard]
  },
  { path: '', redirectTo: '/presentation', pathMatch: 'full' },
  { path: 'lifeCycle', component: LifeCycleComponent },
  { path: 'presentation', component: AdminComponent },
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

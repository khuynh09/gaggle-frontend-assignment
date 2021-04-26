import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignOnComponent } from './sign-on/sign-on.component';
import { ApplicationComponent } from './application/application.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-on',
    pathMatch: 'full',
  },
  {
    path: 'sign-on',
    component: SignOnComponent,
  },
  {
    path: 'application',
    component: ApplicationComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

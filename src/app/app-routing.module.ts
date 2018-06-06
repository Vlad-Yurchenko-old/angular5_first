import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {ArtuserComponent} from './components/artuser/artuser.component';
import {LoginComponent} from './components/login/login.component';
import {CvComponent} from './components/cv/cv.component';

const routes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'},
  {path: 'cv/list', component: ArtuserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cv/:owner', component: CvComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

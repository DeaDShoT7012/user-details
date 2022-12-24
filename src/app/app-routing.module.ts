import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MianPageComponent } from './mian-page/mian-page.component';

const routes: Routes = [
  {
    path:'',redirectTo:'/user/home',pathMatch:'full'
  },
  {
    path:'user/home',component:MianPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

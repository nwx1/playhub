import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {path: '', component: LayoutComponent, children: [
    {path: '', redirectTo: 'menu', pathMatch: 'prefix'},
    {path: 'menu', loadChildren: () => import('./menu/menu.module').then(m=>m.MenuModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }

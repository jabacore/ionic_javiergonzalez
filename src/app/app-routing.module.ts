import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';



const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'create',
    loadChildren: './spot-new/spot-new.module#SpotNewPageModule'
  },
  {
    path: 'details/:id',
    loadChildren: './spot-detail/spot-detail.module#SpotDetailPageModule'
  },
  {
    path: 'edit/:id',
    loadChildren: './spot-edit/spot-edit.module#SpotEditPageModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



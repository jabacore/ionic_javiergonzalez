import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { SpotNewPage } from './spot-new/spot-new.page';
import { SpotDetailPage } from './spot-detail/spot-detail.page';
import { SpotEditPage } from './spot-edit/spot-edit.page';
import { HomePage } from './home/home.page';
import { SpotNewPageModule } from './spot-new/spot-new.module';
import { SpotDetailPageModule } from './spot-detail/spot-detail.module';
import { SpotEditPageModule } from './spot-edit/spot-edit.module';



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
    path: 'spots/:id/new',
    loadChildren: () => import('./spot-new/spot-new.module').then(m => m.SpotNewPageModule)
  },
  {
    path: 'spots/:spotId',
    loadChildren: () => import('./spot-detail/spot-detail.module').then(m => m.SpotDetailPageModule)
  },
  {
    path: 'spots/:id/edit',
     loadChildren: () => import('./spot-edit/spot-edit.module').then(m => m.SpotEditPageModule)  
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



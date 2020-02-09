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
  {path: '', loadChildren: './home/home.module#HomePageModule'},
  {path: 'spots/:id/new', loadChildren: './spot-new/spot-new.module#SpotNewPageModule'},
  {path: 'spots/:productId', loadChildren: './spot-detail/spot-detail.module#SpotDetailPageModule'},
  {path: 'spots/:id/edit', loadChildren: './spot-edit/spot-edit.module#SpotEditPageModule'}
  /*
  {
    path: 'spots/:id/new',
    loadChildren: './spot-new/spot-new.module#SpotNewPageModule'
  },
  {
    path: 'spots/:spotId',
    loadChildren: './spot-detail/spot-detail.module#SpotDetailPageModule'
  },
  {
    path: 'spots/:id/edit',
    loadChildren: './spot-edit/spot-edit.module#SpotEditPageModule'
  }*/
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



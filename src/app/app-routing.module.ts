import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomePageModule } from './home/home.module';
import { SpotNewPage } from './spot-new/spot-new.page';
import { SpotDetailPage } from './spot-detail/spot-detail.page';
import { SpotEditPage } from './spot-edit/spot-edit.page';
import { HomePage } from './home/home.page';



const routes: Routes = [
  {path: '',                    component: HomePage},
  {path: 'spots/:id/new', component: SpotNewPage},
  {path: 'spots/:spotId', component: SpotDetailPage},
  {path: 'spots/:id/edit', component: SpotEditPage},
  {
    path: 'spot-item',
    loadChildren: () => import('./spot-item/spot-item.module').then( m => m.SpotItemPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}



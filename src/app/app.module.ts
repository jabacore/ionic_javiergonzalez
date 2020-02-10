import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { IonicStorageModule } from '@ionic/storage';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SpotEditPage } from './spot-edit/spot-edit.page';
import { SpotDetailPage } from './spot-detail/spot-detail.page';
import { SpotNewPage } from './spot-new/spot-new.page';
import { HomePage } from './home/home.page';
import { HttpClientModule } from '@angular/common/http';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { SpotData } from './shared/spot-data';
import { SpotItemPage } from './spot-item/spot-item.page';
import { SpotEditPageModule } from './spot-edit/spot-edit.module';
import { SpotDetailPageModule } from './spot-detail/spot-detail.module';
import { SpotNewPageModule } from './spot-new/spot-new.module';
import { SpotItemPageModule } from './spot-item/spot-item.module';


@NgModule({
  declarations: [AppComponent,
  SpotEditPage,
  SpotDetailPage,
  SpotNewPage,
  SpotItemPage,
  HomePage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
    InMemoryWebApiModule.forRoot(SpotData)
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

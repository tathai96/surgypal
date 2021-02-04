import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPage } from './pages/login/login.page';
import { MenuService } from './services/menu.service';
import { IonicSelectableModule } from 'ionic-selectable';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChartsModule } from 'ng2-charts';
import { SharedService } from './services/shared.service';
import { ToastrModule } from 'ngx-toastr';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { SurgeryDetailsService } from './services/surgery-details.service';
import { LoaderService } from './services/loader.service';
import { RequestHeaderInterceptorService } from './services/request-header-interceptor.service';
import { HTTP } from '@ionic-native/http/ngx';
import { util } from './util';
import { NgxYoutubePlayerModule } from 'ngx-youtube-player';

@NgModule({
  declarations: [
    AppComponent,
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ChartsModule,
    NgxDatatableModule,
    NgxYoutubePlayerModule.forRoot(),
    ToastrModule.forRoot({
      timeOut: 2500,
      positionClass: 'toast-bottom-center'
    }),
    IonicModule.forRoot(), 
    AppRoutingModule, FontAwesomeModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HTTP,
    { provide: HTTP_INTERCEPTORS, useClass: RequestHeaderInterceptorService, multi: true },
    MenuService,
    util,
    IonicSelectableModule,
    SharedService,
    LoaderService,
    SurgeryDetailsService,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgxWebstorageModule } from 'ngx-webstorage';
import { LayoutModule } from './@app/pages/layout/layout.module';
import { AuthGuard } from './@core-web/security/auth.guard';
import { AuthService } from './@core-web/security/auth.service';
import { LoggedInAuthGuard } from './@core-web/security/logged-in-auth.guard';
import { AuthHttpInterceptor } from './@core-web/service/auth-http.interceptor';
import { SharedServiceModule } from './@shared/service/shared-service.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SessionModule } from './@app/pages/session/session.module';
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AlertMessageModule } from './@shared/component/alert-message/alert-message.module';
import { SpinnerModule } from './@shared/component/spinner/spinner.module';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, "./assets/i18n/", ".json");
}

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    SessionModule,
    LayoutModule,
    SharedServiceModule,
    NgxWebstorageModule.forRoot(),
    FlexLayoutModule,
    HttpClientModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    AlertMessageModule,
    SpinnerModule
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    AuthService,
    AuthGuard,
    LoggedInAuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthHttpInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

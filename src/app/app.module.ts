import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { SettingsPage } from '../pages/settings/settings';
import { NotificationsPage } from '../pages/notifications/notifications';
import { SearchPage } from '../pages/search/search';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
import { HomePage } from '../pages/home/home';
import { MyLocationPage } from '../pages/my-location/my-location';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    SettingsPage,
    NotificationsPage,
    SearchPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    HomePage,
    MyLocationPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SettingsPage,
    NotificationsPage,
    SearchPage,
    TabsControllerPage,
    LoginPage,
    SignupPage,
    HomePage,
    MyLocationPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
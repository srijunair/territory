import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NotificationsPage } from '../notifications/notifications';
import { SettingsPage } from '../settings/settings';
import { SearchPage } from '../search/search';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = NotificationsPage;
  tab2Root: any = SettingsPage;
  tab3Root: any = SearchPage;
  constructor(public navCtrl: NavController) {
  }
  goToNotifications(params){
    if (!params) params = {};
    this.navCtrl.push(NotificationsPage);
  }goToSettings(params){
    if (!params) params = {};
    this.navCtrl.push(SettingsPage);
  }
}

import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth.service';
import {
  IonChip,
  IonButton,
  IonIcon,
  IonCard,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenu,
  IonMenuButton,
  IonTitle,
  IonToolbar,
  IonAvatar,
  IonLabel,
  IonSearchbar
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonChip,
    IonButton,
    IonIcon,
    IonCard,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenu,
    IonMenuButton,
    IonTitle,
    IonToolbar,
    IonAvatar,
    IonLabel,
    IonSearchbar,
  ],
})
export class HomePage {
  constructor(
    private authService: AuthService,
    private navCtrl: NavController
  ) {}

  onLogout() {
    this.authService.logout();
    this.navCtrl.navigateRoot('/login');
  }
}

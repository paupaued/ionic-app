import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent,  IonButtons,IonMenu,IonMenuButton,IonAvatar,IonLabel } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar,IonAvatar,IonLabel],
})

export class HomePage {
  constructor() {}
}

import { Component} from '@angular/core';
import { IonChip, IonButton, IonIcon, IonCard, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonAvatar, IonLabel, IonSearchbar } from '@ionic/angular/standalone';@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonChip, IonButton, IonIcon, IonCard, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonAvatar, IonLabel, IonSearchbar],
})
export class HomePage {
  constructor() {}
}

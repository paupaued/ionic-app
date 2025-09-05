import { Component} from '@angular/core';
import { IonCardSubtitle, IonCard, IonHeader, IonToolbar, IonTitle, IonContent, IonButtons, IonMenu, IonMenuButton, IonAvatar, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCardSubtitle, IonCard, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonAvatar, IonLabel, IonCardContent, IonCardHeader, IonCardTitle, IonSearchbar],
})
export class HomePage {
  constructor() {}
}

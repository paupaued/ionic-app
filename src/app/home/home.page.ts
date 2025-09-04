import { Component} from '@angular/core';
import { IonCard, IonHeader, IonToolbar, IonTitle, IonContent,  IonButtons,IonMenu,IonMenuButton,IonAvatar,IonLabel, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar } from '@ionic/angular/standalone';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonCard, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonTitle, IonToolbar, IonAvatar, IonLabel, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar],
})
export class HomePage {
  constructor() {}
}

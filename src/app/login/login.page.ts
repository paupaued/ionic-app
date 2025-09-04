import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonToast, IonItem, IonButton, IonInputPasswordToggle, IonInput, IonContent, IonModal, IonHeader, IonToolbar, IonTitle, IonButtons, IonIcon } from '@ionic/angular/standalone';
import { Router } from '@angular/router';
import { addIcons } from 'ionicons';
import { close } from 'ionicons/icons';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [IonModal, IonHeader, IonToolbar,IonTitle,IonButton,IonIcon, IonContent, CommonModule, FormsModule, IonItem, IonButtons, IonInput, IonInputPasswordToggle, IonToast]
})
export class LoginPage implements OnInit {

  email: string = '';
  password: string = '';
  isToastOpen: boolean = false;

  isForgotPasswordModalOpen: boolean = false;
  forgotPasswordEmail: string = '';

  constructor(private router: Router) {
    addIcons({ close });
  }

  

  ngOnInit() {
  }

  login() {
    console.log(this.email);
    console.log(this.password);

    if (this.email === 'bru.pinto@duocuc.cl' || this.email=='pau.escudero@duocuc.cl' && this.password === '123456') {
      this.router.navigateByUrl('/home');
    } else {
      this.isToastOpen = true;
    }
  }

openForgotPasswordModal() {
    this.isForgotPasswordModalOpen = true;
    this.forgotPasswordEmail = '';
  }

  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }

  sendResetPasswordEmail() {
    if (this.forgotPasswordEmail) {
      // Aquí puedes añadir la lógica para enviar el email
      console.log('Enviando email de recuperación a:', this.forgotPasswordEmail);
      
      // Simular envío exitoso
      this.closeForgotPasswordModal();
      
      // Mostrar toast de confirmación
      this.showResetEmailToast();
    }
  }

  showResetEmailToast() {
    // Puedes crear otro toast para confirmar el envío
    console.log('Email de recuperación enviado');
  }


}


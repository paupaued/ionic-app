import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,           // para ngModel usado en el modal
    ReactiveFormsModule,   // para formGroup
    IonicModule
  ]
})
export class LoginPage {
  loginForm: FormGroup;
  isForgotPasswordModalOpen = false;
  forgotPasswordEmail = '';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  // Llamado desde (ngSubmit)
  async onLogin() {
    console.log('onLogin()', this.loginForm.value);

    if (this.loginForm.invalid) {
      const t = await this.toastCtrl.create({
        message: 'Completa un correo y contraseña válidos',
        duration: 1500,
        color: 'warning'
      });
      await t.present();
      return;
    }

    const { email, password } = this.loginForm.value;
    const success = this.authService.login(email, password);

    if (success) {
      const toast = await this.toastCtrl.create({
        message: 'Login exitoso',
        duration: 1500,
        color: 'success'
      });
      await toast.present();
      this.navCtrl.navigateRoot('/home');
    } else {
      const toast = await this.toastCtrl.create({
        message: 'Credenciales incorrectas. Si no tienes cuenta, regístrate.',
        duration: 2000,
        color: 'danger'
      });
      await toast.present();
    }
  }

  // Navegar al register
  goToRegister() {
    console.log('goToRegister()');
    this.navCtrl.navigateForward('/register');
  }

  // --- Forgot password helpers ---
  openForgotPasswordModal() {
    this.isForgotPasswordModalOpen = true;
  }

  closeForgotPasswordModal() {
    this.isForgotPasswordModalOpen = false;
  }

  async sendResetPasswordEmail() {
    if (!this.forgotPasswordEmail || this.forgotPasswordEmail.indexOf('@') === -1) {
      const toast = await this.toastCtrl.create({
        message: 'Ingresa un correo válido para recuperar contraseña',
        duration: 1800,
        color: 'warning'
      });
      await toast.present();
      return;
    }

    // Simulación: sólo un toast
    const toast = await this.toastCtrl.create({
      message: `Se envió un correo de recuperación a ${this.forgotPasswordEmail}`,
      duration: 2000,
      color: 'success'
    });
    await toast.present();

    this.closeForgotPasswordModal();
  }
}

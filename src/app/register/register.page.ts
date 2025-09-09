import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IonicModule, NavController, ToastController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule
  ]
})
export class RegisterPage {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private navCtrl: NavController,
    private toastCtrl: ToastController
  ) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

  async onRegister() {
    console.log('onRegister()', this.registerForm.value);

    if (this.registerForm.invalid) {
      const t = await this.toastCtrl.create({
        message: 'Completa los datos correctamente',
        duration: 1500,
        color: 'warning'
      });
      await t.present();
      return;
    }

    const { email, password } = this.registerForm.value;
    const success = this.authService.register(email, password);

    if (success) {
      const toast = await this.toastCtrl.create({
        message: 'Usuario registrado correctamente',
        duration: 1500,
        color: 'success'
      });
      await toast.present();
      this.navCtrl.navigateRoot('/login');
    } else {
      const toast = await this.toastCtrl.create({
        message: 'El usuario ya existe',
        duration: 1800,
        color: 'danger'
      });
      await toast.present();
    }
  }
}

import {NgModule} from '@angular/core';
import {LoginLibComponent} from './login-lib.component';
import {LoginHomeComponent} from './components/login/home/login-home.component';
import {ForgotPasswordConfirmCodeComponent} from './components/login/components/forgot-password-confirm-code/forgot-password-confirm-code.component';
import {ForgotPasswordSendEmailComponent} from './components/login/components/forgot-password-send-email/forgot-password-send-email.component';
import {NewPasswordRequiredComponent} from './components/login/components/new-password-required/new-password-required.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {CommonModule} from '@angular/common';
import {LoginLibRoutingModule} from './login-lib-routing.module';

@NgModule({
  declarations: [
    LoginLibComponent,
    LoginHomeComponent,
    ForgotPasswordConfirmCodeComponent,
    ForgotPasswordSendEmailComponent,
    NewPasswordRequiredComponent
  ],
  imports: [
    FormsModule,
    RouterModule,
    CommonModule,
    ReactiveFormsModule,
    LoginLibRoutingModule
  ],
  exports: [
    LoginHomeComponent,
    ForgotPasswordConfirmCodeComponent,
    ForgotPasswordSendEmailComponent,
    NewPasswordRequiredComponent
  ]
})
export class LoginLibModule {
}

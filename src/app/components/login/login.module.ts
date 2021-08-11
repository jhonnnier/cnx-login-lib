import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LoginHomeComponent} from './home/login-home.component';
import {LoginRoutingModule} from './login-routing.module';
import { ForgotPasswordSendEmailComponent } from './components/forgot-password-send-email/forgot-password-send-email.component';
import { NewPasswordRequiredComponent } from './components/new-password-required/new-password-required.component';
import {ForgotPasswordConfirmCodeComponent} from './components/forgot-password-confirm-code/forgot-password-confirm-code.component';

@NgModule({
  declarations: [
    LoginHomeComponent,
    ForgotPasswordConfirmCodeComponent,
    ForgotPasswordSendEmailComponent,
    NewPasswordRequiredComponent
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ],
  exports: [
    LoginHomeComponent
  ],
})
export class LoginModule {
}

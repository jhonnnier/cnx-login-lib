import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginHomeComponent} from './components/login/home/login-home.component';
import {ForgotPasswordConfirmCodeComponent} from './components/login/components/forgot-password-confirm-code/forgot-password-confirm-code.component';
import {NewPasswordRequiredComponent} from './components/login/components/new-password-required/new-password-required.component';
import {ForgotPasswordSendEmailComponent} from './components/login/components/forgot-password-send-email/forgot-password-send-email.component';

const routes: Routes = [{
  path: '',
  component: LoginHomeComponent,
  children: [
    {
      path: '',
      component: LoginHomeComponent
    },
    {
      path: 'forgot-password-confirm-code',
      component: ForgotPasswordConfirmCodeComponent
    },
    {
      path: 'forgot-password-send-email',
      component: ForgotPasswordSendEmailComponent
    },
    {
      path: 'new-password-required',
      component: NewPasswordRequiredComponent
    },
    {
      path: '**',
      redirectTo: 'login'
    },
    {
      path: '',
      redirectTo: '/login',
      pathMatch: 'full'
    }
  ]
}
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class LoginLibRoutingModule {
}

import { NgModule } from '@angular/core';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleSigninButtonModule,
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { SecurityComponent } from './security.component';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

const routes: Routes = [
  {
    path: '',
    component: SecurityComponent
  }
];

@NgModule({
  declarations: [SecurityComponent],
  imports: [
    CommonModule,
    SocialLoginModule,
    GoogleSigninButtonModule,
    RouterModule.forChild(routes)
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '610266341770-id4stvst7u4rgatukb6udgd2d981b1mo.apps.googleusercontent.com'
            )
          }
        ],
        onError: err => {
          console.error(err);
        }
      } as SocialAuthServiceConfig
    }
  ],
  exports: [RouterModule],
  bootstrap: []
})
export class SecurityModule {}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import {
  SocialLoginModule,
  SocialAuthServiceConfig,
  GoogleSigninButtonModule,
  GoogleLoginProvider
} from '@abacritt/angularx-social-login';
import { SecurityComponent } from './security.component';

@NgModule({
  declarations: [SecurityComponent],
  imports: [
    SocialLoginModule,
    GoogleSigninButtonModule,
    CommonModule,
    BrowserModule
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
  bootstrap: [SecurityComponent]
})
export class SecurityModule {}

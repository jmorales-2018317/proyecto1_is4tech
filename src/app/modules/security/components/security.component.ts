// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third Parties
import {
  GoogleLoginProvider,
  SocialAuthService,
  SocialUser
} from '@abacritt/angularx-social-login';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  user?: SocialUser;
  logged?: boolean;

  constructor(
    private authService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.authState.subscribe(user => {
      this.user = user;
      this.logged = user != null;

      localStorage.setItem('Token', user?.idToken);

      const token = localStorage.getItem('Token');
      if (token) {
        this.router.navigate(['/dogs']);
        console.log('redirected');
      }
    });
  }

  loginWithGoogle() {
    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }
}

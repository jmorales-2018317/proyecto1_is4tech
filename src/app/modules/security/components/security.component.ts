// Angular
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Third Parties
import { SocialAuthService } from '@abacritt/angularx-social-login';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss']
})
export class SecurityComponent implements OnInit {
  loginForm!: FormGroup;
  socialUser = {
    name: localStorage.getItem('User') || '',
    email: localStorage.getItem('Email') || ''
  };
  isLoggedin = localStorage.getItem('Token') ? true : false;

  constructor(
    private formBuilder: FormBuilder,
    private socialAuthService: SocialAuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.socialAuthService.authState.subscribe(user => {
      this.socialUser = user;
      this.isLoggedin = user != null;

      //Almacenar la información
      localStorage.setItem('Token', user.idToken);
      localStorage.setItem('User', this.socialUser.name);
      localStorage.setItem('Email', this.socialUser.email);
    });
  }

  //Borrar todos los datos al hacer logOut
  logOut(): void {
    this.socialUser.name = '';
    this.socialUser.email = '';
    this.isLoggedin = false;
    localStorage.removeItem('Token');
    localStorage.removeItem('User');
    localStorage.removeItem('Email');
  }

  dogRedirect() {
    this.router.navigate(['/dogs']);
    console.log('redirected');
  }
}

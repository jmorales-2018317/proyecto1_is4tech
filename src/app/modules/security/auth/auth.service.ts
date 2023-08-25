import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  logged: boolean | undefined;

  isLoggedIn() {
    const token = localStorage.getItem('Token') || '';

    if (token === '') {
      this.logged = false;
      return this.logged;
    }

    this.logged = true;
    return this.logged;
  }
}

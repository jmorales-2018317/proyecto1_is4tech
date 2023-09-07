import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  logged: boolean | undefined;

  isLoggedIn() {
    const user = localStorage.getItem('User');

    if (!user || user === '') {
      this.logged = false;
      return this.logged;
    }

    this.logged = true;
    return this.logged;
  }
}

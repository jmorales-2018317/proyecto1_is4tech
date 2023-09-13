import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

type formValues = {
  name: string;
  birthday: string;
  nit: string;
  phone?: string;
  address?: string;
  coment: string;
};

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [MatSlideToggleModule, CommonModule, ReactiveFormsModule]
})
export class AdminComponent {
  greetingHand = 'src/images/greeting_hand.png';
  active = false;
  today = new Date().toISOString().split('T')[0];
  result!: string;
  cf = false;
  validData = false;
  formValues!: formValues;

  formErrors = {
    nameError: false,
    birthdayError: false,
    nitError: false,
    phoneError: false,
    addressError: false,
    comentError: false
  };

  userForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
      Validators.maxLength(45),
      Validators.pattern('[a-zA-Z ]*')
    ]),
    nit: new FormControl('', [
      Validators.required,
      Validators.min(100000),
      Validators.max(99999999)
    ]),
    birthday: new FormControl('', [Validators.required]),
    coment: new FormControl('', [
      Validators.required,
      Validators.maxLength(200)
    ]),
    phone: new FormControl(''),
    address: new FormControl('')
  });

  submit() {
    if (this.userForm.valid) {
      this.result = 'Todos los datos son válidos';
      this.formValues = {
        name: this.userForm.get('name')?.value || '',
        birthday: this.userForm.get('birthday')?.value || '',
        nit: this.cf ? 'C/F' : this.userForm.get('nit')?.value || '',
        phone: this.userForm.get('phone')?.value || undefined,
        address: this.userForm.get('address')?.value || undefined,
        coment: this.userForm.get('coment')?.value || ''
      };
    } else this.result = 'Hay datos inválidos en el formulario';
  }

  clean() {
    this.userForm.reset();
    this.validData = false;
  }

  noNit() {
    this.cf = !this.cf;
    const nitControl = this.userForm.get('nit');
    if (nitControl) {
      if (!this.cf) {
        nitControl.setValidators([
          Validators.required,
          Validators.min(100000),
          Validators.max(99999999)
        ]);
      } else {
        nitControl.clearValidators();
      }
      nitControl.updateValueAndValidity();
    }
  }

  newUser() {
    this.active = !this.active;
    const phoneControl = this.userForm.get('phone');
    const addressControl = this.userForm.get('address');
    if (phoneControl && addressControl) {
      if (this.active) {
        phoneControl.setValidators([
          Validators.required,
          Validators.min(10000000),
          Validators.max(99999999)
        ]);
        addressControl.setValidators(Validators.required);
      } else {
        phoneControl.clearValidators();
        addressControl.clearValidators();
      }
      phoneControl.updateValueAndValidity();
      addressControl.updateValueAndValidity();
    }
  }
}

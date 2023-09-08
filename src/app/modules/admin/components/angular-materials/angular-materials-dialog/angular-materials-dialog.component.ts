import { Component, Inject, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroupDirective,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import {
  MAT_DIALOG_DATA,
  MatDialogModule,
  MatDialogRef
} from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { DialogData } from '../angular-materials.component';
import { ErrorStateMatcher } from '@angular/material/core';
import { NgIf } from '@angular/common';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}

@Component({
  selector: 'app-angular-materials-dialog',
  templateUrl: './angular-materials-dialog.component.html',
  standalone: true,
  imports: [
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    ReactiveFormsModule,
    NgIf
  ]
})
export class AngularMaterialsDialogComponent implements OnInit {
  nameFormControl = new FormControl('', [Validators.required]);
  disabled = true;

  matcher = new MyErrorStateMatcher();

  constructor(
    public dialogRef: MatDialogRef<AngularMaterialsDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {
    this.validName();
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  validName() {
    if (this.data.username) {
      this.disabled = false;
      return;
    }
    this.disabled = true;
  }
}

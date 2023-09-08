import { AfterViewInit, Component, ViewChild } from '@angular/core';
import {
  FormBuilder,
  FormsModule,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { NgIf } from '@angular/common';
import { LiveAnnouncer } from '@angular/cdk/a11y';

import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { AngularMaterialsDialogComponent } from './angular-materials-dialog/angular-materials-dialog.component';
import { MatSort, MatSortModule, Sort } from '@angular/material/sort';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

export interface DialogData {
  title: string;
  name: string;
  username: string;
}

export interface PeriodicElement {
  id: number;
  names: string;
  age: number;
}

//TABLE DATA
const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, names: 'Aaron', age: 57 },
  { id: 2, names: 'Violeta', age: 21 },
  { id: 3, names: 'Jefrey', age: 41 },
  { id: 4, names: 'Jude', age: 65 },
  { id: 5, names: 'Leon', age: 10 },
  { id: 6, names: 'Jaime', age: 8 },
  { id: 7, names: 'David', age: 17 },
  { id: 8, names: 'Carlos', age: 19 },
  { id: 9, names: 'Edgar', age: 14 },
  { id: 10, names: 'Alberto', age: 44 },
  { id: 11, names: 'Sofia', age: 27 },
  { id: 12, names: 'John', age: 20 }
];

@Component({
  selector: 'app-angular-materials',
  templateUrl: './angular-materials.component.html',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    NgIf,
    MatDialogModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatButtonModule,
    MatDividerModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatSlideToggleModule
  ]
})
export class AngularMaterialsComponent implements AfterViewInit {
  //DATE PICKERS

  minDate: Date;
  maxDate: Date;

  //FAB BUTTON

  title = 'Prueba Dialogo';
  name = '';
  username = '';

  // TABLE

  displayedColumns: string[] = ['id', 'names', 'age'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  // STEPPER
  minBirthDay: Date;
  maxBirthDay: Date;
  isOptional = false;
  dpi = '';
  nextDisable = false;

  constructor(
    public dialog: MatDialog,
    private _liveAnnouncer: LiveAnnouncer,
    private _formBuilder: FormBuilder
  ) {
    // DATEPICKERS
    // Set the minimum to January 1st, 2021 to December 31st, 2025 (4 year range)
    const currentYear = new Date().getFullYear();
    this.minDate = new Date(currentYear - 0, 0, 1);
    this.maxDate = new Date();
    this.minBirthDay = new Date(currentYear - 100, 0, 1);
    this.maxBirthDay = new Date();
  }

  //FAB BUTTON

  openDialog(): void {
    const dialogRef = this.dialog.open(AngularMaterialsDialogComponent, {
      data: { name: this.name, title: this.title, username: this.username }
    });

    dialogRef.afterClosed().subscribe(result => {
      this.username = result;
    });
  }

  //TABLE

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  //STEPPER

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required]
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required]
  });
  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['']
  });

  //Disable next button if toggle is ON and dpi length is !== 13
  dpiNext() {
    if (this.isOptional) {
      if (this.dpi.toString().length === 13) {
        this.nextDisable = false;
        return;
      }
      this.nextDisable = true;
      return;
    }
    this.nextDisable = false;
  }
}

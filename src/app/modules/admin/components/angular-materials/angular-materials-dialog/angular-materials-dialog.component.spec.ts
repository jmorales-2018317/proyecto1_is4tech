import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialsDialogComponent } from './angular-materials-dialog.component';

describe('AngularMaterialsDialogComponent', () => {
  let component: AngularMaterialsDialogComponent;
  let fixture: ComponentFixture<AngularMaterialsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialsDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

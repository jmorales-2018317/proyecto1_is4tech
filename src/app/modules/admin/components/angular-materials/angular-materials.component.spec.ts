import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMaterialsComponent } from './angular-materials.component';

describe('AngularMaterialsComponent', () => {
  let component: AngularMaterialsComponent;
  let fixture: ComponentFixture<AngularMaterialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMaterialsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AngularMaterialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

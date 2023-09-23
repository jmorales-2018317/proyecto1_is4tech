import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './modules/admin/components/dogs/dogs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LifeCycleComponent } from './modules/admin/components/life-cycle/life-cycle.component';
import { OnChangesComponent } from './modules/admin/components/life-cycle/on-changes/on-changes.component';
import { SharedModule } from './modules/shared/shared.module';
import { AdminComponent } from './modules/admin/admin.component';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    DogsComponent,
    LifeCycleComponent,
    OnChangesComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    NgbModule,
    SharedModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

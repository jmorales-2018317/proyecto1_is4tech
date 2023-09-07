import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './modules/admin/components/dogs/dogs.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LifeCycleComponent } from './modules/admin/components/life-cycle/life-cycle.component';
import { OnChangesComponent } from './modules/admin/components/life-cycle/on-changes/on-changes.component';

@NgModule({
  declarations: [
    AppComponent,
    DogsComponent,
    LifeCycleComponent,
    OnChangesComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

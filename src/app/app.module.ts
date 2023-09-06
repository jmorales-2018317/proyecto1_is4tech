import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DogsComponent } from './modules/admin/components/dogs/dogs.component';
import { SecurityModule } from './modules/security/components/security.module';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LifeCycleComponent } from './modules/admin/components/life-cycle/life-cycle.component';

@NgModule({
  declarations: [AppComponent, DogsComponent, LifeCycleComponent],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SecurityModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}

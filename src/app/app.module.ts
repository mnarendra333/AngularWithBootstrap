import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProductComponent } from './product/product.component';
import { EmployeeComponenet } from './employee/employee.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
    EmployeeComponenet
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

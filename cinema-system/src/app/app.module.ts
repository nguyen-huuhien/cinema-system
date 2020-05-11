import { MatInputModule } from "@angular/material/input";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import {
  AuthService,
  AuthServiceConfig,
  FacebookLoginProvider,
} from "angularx-social-login";
import { MemberComponent } from "./Components/component-vu/member/member.component";
import { httpInteceptorProvider } from "./Services/auth-interceptor";
import { MovieStatisticComponent } from "./Components/component-toantr/movie-statistic/movie-statistic.component";
import { AddNewEditEmployeeComponent } from "./Components/component-toantr/add-new-edit-employee/add-new-edit-employee.component";
import { DatepickerMinMaxComponent } from "./Components/component-toantr/datepicker-min-max/datepicker-min-max.component";
import { EmployeeUsernameAsyncValidatorDirective } from "./Components/component-toantr/Directives/employee-username-async-validator/employee-username-async-validator.directive";
import { FullnameTrimDirective } from './Components/component-toantr/Directives/fullname/fullname-trim.directive';

@NgModule({
  declarations: [
    AppComponent,
    MemberComponent,
    MovieStatisticComponent,
    AddNewEditEmployeeComponent,
    DatepickerMinMaxComponent,
    EmployeeUsernameAsyncValidatorDirective,
    FullnameTrimDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    httpInteceptorProvider,
    {
      provide: AuthServiceConfig,
      useFactory: socialConfigs,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

export function socialConfigs() {
  const config = new AuthServiceConfig([
    {
      id: FacebookLoginProvider.PROVIDER_ID,
      provider: new FacebookLoginProvider("1570392383013006"),
    },
  ]);
  return config;
}

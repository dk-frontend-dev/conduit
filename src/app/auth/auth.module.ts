import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms'

import {LoginComponent} from '@/auth/components/login/login.component'
import {AuthRoutingModule} from '@/auth/auth-routing.module'
import {AuthService} from '@/auth/services/auth.service'
import {ValidationErrorsModule} from '@shared/validation-errors/validation-errors.module'

@NgModule({
  imports: [
    CommonModule,
    AuthRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ValidationErrorsModule
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}

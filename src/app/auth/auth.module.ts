import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'
import {HttpClientModule} from '@angular/common/http'

import {LoginComponent} from '@/auth/components/login/login.component'
import {AuthRoutingModule} from '@/auth/auth-routing.module'
import {AuthService} from '@/auth/services/auth.service'

@NgModule({
  imports: [CommonModule, AuthRoutingModule, HttpClientModule],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: [AuthService]
})
export class AuthModule {}

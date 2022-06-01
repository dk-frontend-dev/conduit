import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {LoginComponent} from '@/auth/components/login/login.component'
import { AuthRoutingModule } from '@/auth/auth-routing.module'

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent],
  exports: [LoginComponent]
})
export class AuthModule {}

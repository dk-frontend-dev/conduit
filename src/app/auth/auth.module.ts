import {CommonModule} from '@angular/common'
import {NgModule} from '@angular/core'

import {LoginComponent} from '@/auth/components/login/login.component'
import { AuthRoutingModule } from '@/auth/auth-routing.module';
import { RegisterComponent } from './components/register/register.component'

@NgModule({
  imports: [CommonModule, AuthRoutingModule],
  declarations: [LoginComponent, RegisterComponent],
  exports: [LoginComponent,RegisterComponent]
})
export class AuthModule {}

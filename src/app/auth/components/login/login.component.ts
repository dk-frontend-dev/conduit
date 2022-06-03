import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {AuthService} from '@/auth/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result!: any

  constructor(private authService: AuthService) {}

  login() {}

  ngOnInit(): void {
    this.authService.login({email: 'fdf2222@gmail.com', password: '12345678'}).subscribe(data => {
      this.result = data
    })
  }
}

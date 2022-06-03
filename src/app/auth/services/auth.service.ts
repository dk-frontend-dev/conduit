import {Injectable} from '@angular/core'
import {HttpClient} from '@angular/common/http'
import {Observable} from 'rxjs'

import {LoginRequestInterface} from '@/auth/types/login-request.interface'
import {environment} from 'src/environments/environment'

@Injectable()
export class AuthService {
  constructor(private http: HttpClient) {}

  login(data: LoginRequestInterface): Observable<Object> {
    const url = environment.apiUrl + '/users/login'

    return this.http.post(url, {user: data})
  }
}

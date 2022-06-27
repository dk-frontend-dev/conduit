import {Component, OnInit} from '@angular/core'
import {FormBuilder, FormGroup, Validators} from '@angular/forms'
import {catchError} from 'rxjs/operators'

import {AuthService} from '@/auth/services/auth.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  result!: any
  form!: FormGroup
  isSubmitting: boolean = false
  validationErrors!: any

  constructor(private authService: AuthService, private fb: FormBuilder) {}

  onSubmit(): void {
    this.isSubmitting = true

    this.authService
      .login(this.form.value)
      .pipe(
        catchError(err => {
          this.validationErrors = err.error.errors
          throw new Error('My Error')
        })
      )
      .subscribe(data => {
        console.log(data)
        this.isSubmitting = false
      })
  }

  initializeForm(): void {
    this.form = this.fb.group({
      email: [null, Validators.required],
      password: [null, Validators.required]
    })
  }

  ngOnInit(): void {
    this.initializeForm()
  }
}

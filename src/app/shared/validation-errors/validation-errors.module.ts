import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {ValidationErrorsComponent} from '@shared/validation-errors/components/validation-errors/validation-errors.component'

@NgModule({
  imports: [CommonModule],
  declarations: [ValidationErrorsComponent],
  exports: [ValidationErrorsComponent]
})
export class ValidationErrorsModule {}

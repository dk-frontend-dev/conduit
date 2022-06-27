import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {FavoriteBtnComponent} from '@shared/favorite-btn/components/favorite-btn/favorite-btn.component'

@NgModule({
  declarations: [FavoriteBtnComponent],
  exports: [FavoriteBtnComponent],
  imports: [CommonModule]
})
export class FavoriteBtnModule {}

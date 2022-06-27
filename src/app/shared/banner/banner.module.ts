import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {BannerComponent} from '@shared/banner/components/banner/banner.component'

@NgModule({
  declarations: [BannerComponent],
  exports: [BannerComponent],
  imports: [CommonModule]
})
export class BannerModule {}

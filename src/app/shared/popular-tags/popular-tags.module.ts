import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {PopularTagsComponent} from '@shared/popular-tags/components/popular-tags/popular-tags.component'
import {PopularTagsService} from '@shared/popular-tags/services/popular-tags.service'

@NgModule({
  declarations: [PopularTagsComponent],
  exports: [PopularTagsComponent],
  imports: [CommonModule],
  providers: [PopularTagsService]
})
export class PopularTagsModule {}

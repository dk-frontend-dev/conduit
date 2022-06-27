import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {FeedService} from '@shared/feed/services/feed.service'
import {FeedComponent} from '@shared/feed/components/feed/feed.component'
import {FavoriteBtnModule} from '@shared/favorite-btn/favorite-btn.module'

@NgModule({
  declarations: [FeedComponent],
  exports: [FeedComponent],
  imports: [CommonModule, FavoriteBtnModule],
  providers: [FeedService]
})
export class FeedModule {}

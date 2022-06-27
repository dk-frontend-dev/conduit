import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'

import {HomeComponent} from '@/home/components/home/home.component'
import {HomeRoutingModule} from '@/home/home-routing.module'
import {PopularTagsModule} from '@shared/popular-tags/popular-tags.module'
import {FeedModule} from '@shared/feed/feed.module'
import {BannerModule} from '@shared/banner/banner.module'

@NgModule({
  declarations: [HomeComponent],
  imports: [CommonModule, HomeRoutingModule, PopularTagsModule, FeedModule, BannerModule]
})
export class HomeModule {}

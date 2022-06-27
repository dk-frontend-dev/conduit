import {Component, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {FeedService} from '@shared/feed/services/feed.service'
import {ArticleInterface} from '@shared/types/article.interface'

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  url: string = 'articles?limit=10&offset=0'
  feed$!: Observable<ArticleInterface[]>

  constructor(private feedService: FeedService) {}

  ngOnInit(): void {
    this.feed$ = this.feedService.getFeed(this.url)
  }
}

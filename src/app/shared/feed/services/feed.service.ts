import {Observable} from 'rxjs'
import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map} from 'rxjs/operators'

import {ArticleInterface} from '@shared/types/article.interface'
import {environment} from 'src/environments/environment'

@Injectable()
export class FeedService {
  constructor(private http: HttpClient) {}

  getArticles(data: {articles: ArticleInterface[]}): ArticleInterface[] {
    return data.articles
  }

  getFeed(url: string): Observable<ArticleInterface[]> {
    const fullUrl = `${environment.apiUrl}/${url}`

    return this.http.get<{articles: ArticleInterface[]}>(fullUrl).pipe(map(this.getArticles))
  }
}

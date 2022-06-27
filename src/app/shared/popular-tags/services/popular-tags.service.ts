import {HttpClient} from '@angular/common/http'
import {Injectable} from '@angular/core'
import {map} from 'rxjs/operators'

import {environment} from 'src/environments/environment'

@Injectable()
export class PopularTagsService {
  constructor(private http: HttpClient) {}

  private getTags(data: {tags: string[]}): string[] {
    return data.tags
  }

  getPopularTags() {
    const url = `${environment.apiUrl}/tags`

    return this.http.get<{tags: string[]}>(url).pipe(map(this.getTags))
  }
}

import {Component, HostBinding, OnInit} from '@angular/core'
import {Observable} from 'rxjs'

import {PopularTagsService} from '@shared/popular-tags/services/popular-tags.service'

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  @HostBinding('class') selector = 'sidebar'
  popularTags$: Observable<string[]> | null = null

  constructor(private popularTagsService: PopularTagsService) {}

  fetchData(): void {
    this.popularTags$ = this.popularTagsService.getPopularTags()
  }

  ngOnInit(): void {
    this.fetchData()
    this.popularTagsService.getPopularTags()
  }
}

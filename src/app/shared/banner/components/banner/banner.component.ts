import {Component, HostBinding, OnInit} from '@angular/core'

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit {
  @HostBinding('class') selector = 'banner'

  constructor() {}

  ngOnInit(): void {}
}

import {Component, Input, OnInit} from '@angular/core'

@Component({
  selector: 'app-favorite-btn',
  templateUrl: './favorite-btn.component.html',
  styleUrls: ['./favorite-btn.component.scss']
})
export class FavoriteBtnComponent implements OnInit {
  @Input('favoritesCount') favoritesCountProps!: number
  @Input('favorited') favoritedProps!: boolean

  constructor() {}

  ngOnInit(): void {}
}

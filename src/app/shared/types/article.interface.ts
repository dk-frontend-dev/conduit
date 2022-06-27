import {ProfileInterface} from '@shared/types/profile.interface'

export interface ArticleInterface {
  body: string
  createdAt: string
  title: string
  updatedAt: string
  favorited: boolean
  tagList: string[]
  favoritesCount: number
  author: ProfileInterface
  slug: string
  description: string
}

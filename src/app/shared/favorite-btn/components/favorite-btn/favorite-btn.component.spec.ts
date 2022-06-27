import {ComponentFixture, TestBed} from '@angular/core/testing'

import {FavoriteBtnComponent} from '@shared/favorite-btn/components/favorite-btn/favorite-btn.component'

describe('FavoriteBrnComponent', () => {
  let component: FavoriteBtnComponent
  let fixture: ComponentFixture<FavoriteBtnComponent>

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FavoriteBtnComponent]
    }).compileComponents()
  })

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoriteBtnComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedArticleCardComponent } from './saved-article-card.component';

describe('SavedArticleCardComponent', () => {
  let component: SavedArticleCardComponent;
  let fixture: ComponentFixture<SavedArticleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedArticleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

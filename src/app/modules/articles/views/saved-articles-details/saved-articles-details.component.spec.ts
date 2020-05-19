import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SavedArticlesDetailsComponent } from './saved-articles-details.component';

describe('SavedArticlesDetailsComponent', () => {
  let component: SavedArticlesDetailsComponent;
  let fixture: ComponentFixture<SavedArticlesDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SavedArticlesDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SavedArticlesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

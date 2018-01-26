import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomePostListComponent } from './view-home-post-list.component';

describe('ViewHomePostListComponent', () => {
  let component: ViewHomePostListComponent;
  let fixture: ComponentFixture<ViewHomePostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHomePostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomePostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

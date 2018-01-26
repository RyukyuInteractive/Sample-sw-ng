import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostListComponent } from './header-post-list.component';

describe('HeaderPostListComponent', () => {
  let component: HeaderPostListComponent;
  let fixture: ComponentFixture<HeaderPostListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPostListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPostListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

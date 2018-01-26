import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderHomePostDetailComponent } from './header-home-post-detail.component';

describe('HeaderHomePostDetailComponent', () => {
  let component: HeaderHomePostDetailComponent;
  let fixture: ComponentFixture<HeaderHomePostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderHomePostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderHomePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

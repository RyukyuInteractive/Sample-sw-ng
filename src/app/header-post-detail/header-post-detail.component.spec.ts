import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderPostDetailComponent } from './header-post-detail.component';

describe('HeaderPostDetailComponent', () => {
  let component: HeaderPostDetailComponent;
  let fixture: ComponentFixture<HeaderPostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderPostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderPostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

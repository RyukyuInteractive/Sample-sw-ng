import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomePostDetailComponent } from './view-home-post-detail.component';

describe('ViewHomePostDetailComponent', () => {
  let component: ViewHomePostDetailComponent;
  let fixture: ComponentFixture<ViewHomePostDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHomePostDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomePostDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewHomeNewsComponent } from './view-home-news.component';

describe('ViewHomeNewsComponent', () => {
  let component: ViewHomeNewsComponent;
  let fixture: ComponentFixture<ViewHomeNewsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewHomeNewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewHomeNewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

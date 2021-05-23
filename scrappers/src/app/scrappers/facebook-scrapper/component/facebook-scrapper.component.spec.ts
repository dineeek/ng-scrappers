import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookScrapperComponent } from './facebook-scrapper.component';

describe('FacebookScrapperComponent', () => {
  let component: FacebookScrapperComponent;
  let fixture: ComponentFixture<FacebookScrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacebookScrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookScrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

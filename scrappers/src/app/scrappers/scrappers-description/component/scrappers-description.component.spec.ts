import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrappersDescriptionComponent } from './scrappers-description.component';

describe('ScrappersDescriptionComponent', () => {
  let component: ScrappersDescriptionComponent;
  let fixture: ComponentFixture<ScrappersDescriptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScrappersDescriptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrappersDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

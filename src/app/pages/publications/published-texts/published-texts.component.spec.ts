import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PublishedTextsComponent } from './published-texts.component';

describe('PublishedTextsComponent', () => {
  let component: PublishedTextsComponent;
  let fixture: ComponentFixture<PublishedTextsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PublishedTextsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PublishedTextsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

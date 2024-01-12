import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullScreenPageComponent } from './full-screen-page.component';

describe('FullScreenPageComponent', () => {
  let component: FullScreenPageComponent;
  let fixture: ComponentFixture<FullScreenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FullScreenPageComponent]
    });
    fixture = TestBed.createComponent(FullScreenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

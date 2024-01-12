import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZoomPageComponent } from './zoom-page.component';

describe('ZoomPageComponent', () => {
  let component: ZoomPageComponent;
  let fixture: ComponentFixture<ZoomPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ZoomPageComponent]
    });
    fixture = TestBed.createComponent(ZoomPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

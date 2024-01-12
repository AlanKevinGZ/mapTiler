import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropetiPageComponent } from './propeti-page.component';

describe('PropetiPageComponent', () => {
  let component: PropetiPageComponent;
  let fixture: ComponentFixture<PropetiPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PropetiPageComponent]
    });
    fixture = TestBed.createComponent(PropetiPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

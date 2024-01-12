import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapLayoutComponent } from './map-layout.component';

describe('MapLayoutComponent', () => {
  let component: MapLayoutComponent;
  let fixture: ComponentFixture<MapLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MapLayoutComponent]
    });
    fixture = TestBed.createComponent(MapLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

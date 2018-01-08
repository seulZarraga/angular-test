import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceComponent } from './place.component';

import { PlacesService } from './places.service';

describe('PlaceComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PlaceComponent]
    });
  });
  it('should create the place app', () =>{
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have the same places as the service', () =>{
    let fixture = TestBed.createComponent(PlaceComponent);
    let app = fixture.debugElement.componentInstance;
    let placeService = fixture.debugElement.injector.get(PlacesService);
    expect(app.places).toEqual(placeService.places);
  });
});

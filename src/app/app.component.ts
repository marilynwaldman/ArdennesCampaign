import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';
import { MarkerService} from './marker.service';

/*import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { Marker } from '../models/marker';
*/

declare var google;

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  lat = 49.412510;
  lng = -1.172660;
  zoom = 7;
  filteredMarkers = [];
  markers;
  labelOptions = {
    color: '#CC0000',
    fontFamily: '',
    fontSize: '20px',
    fontWeight: 'bold',
    text: '1',
  };

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private markerService: MarkerService
  ) { }




  ngOnInit() {
    this.getMarkers();
    console.log(this.markers);

    this.mapsAPILoader.load().then(() => {
      const center = new google.maps.LatLng(this.lat, this.lng);
      this.filteredMarkers = this.markers.filter(m => {
        const markerLoc = new google.maps.LatLng(m.latitude, m.longitude);
        const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
        if (distanceInKm < 50000.0) {
          return m;
        }
      });
    });
  }

  getMarkers() {
    this.markerService.getMarkers().subscribe(
      // the first argument is a function which runs on success
      data => { this.markers = data; },
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading markers')
    );
  }
}


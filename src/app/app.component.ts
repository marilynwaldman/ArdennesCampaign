import { Component, OnInit } from '@angular/core';
import { MapsAPILoader } from '@agm/core';

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
  markers = [];
  filteredMarkers = [];

  constructor(
    private mapsAPILoader: MapsAPILoader
  ) { }

  getLocations(): Array<{ latitude: number, longitude: number, label: String, draggable: boolean }> {


    const newVar =
  [
      {
        'label': 'Ardennes Campaign',
        'place': 'Metz',
        'date': '25-Dec-44',
        'latitude': 49.1193,
        'longitude': 6.1757
      },
      {
        'label': 'Battle of the Bulge',
        'place': 'Ettelbruck',
        'date': '12/26/44',
        'latitude': 49.8478,
        'longitude': 6.0985
      },
      {
        'label': 'Battle of the Bulge',
        'place': 'Luxembourg City',
        'date': '12/26/44',
        'latitude': 49.6116,
        'longitude': 6.13
      },
      {
        'label': 'Battle of the Bulge',
        'place': 'Merch',
        'date': '12/26/44',
        'latitude': 49.778,
        'longitude': 6.151
      },
      {
        'label': 'Battle of the Bulge',
        'place': 'Eisenborn',
        'date': '12/27/44',
        'latitude': 50.4574,
        'longitude': 6.2195
      },
      {
        'label': 'Bastogne',
        'place': 'bastogne',
        'date': '12/28/44',
        'latitude': 50.0005,
        'longitude': 5.7153
      },
      {
        'label': 'Bastogne',
        'place': 'DIEKIRCH ',
        'date': '12/28/44',
        'latitude': 49.8672,
        'longitude': 6.1596
      },
      {
        'label': 'Bastogne',
        'place': ' BASTENDORF',
        'date': '12/28/44',
        'latitude': 49.8913,
        'longitude': 6.1633
      },
      {
        'label': 'Bastogne',
        'place': 'TANDEL ',
        'date': '12/28/44',
        'latitude': 49.8968,
        'longitude': 6.182
      },
      {
        'label': 'Bastogne',
        'place': ' LONGSDORF',
        'date': '12/28/44',
        'latitude': 49.8981,
        'longitude': 6.204
      },
      {
        'label': 'Bastogne',
        'place': 'AMMELDINGEN ',
        'date': '12/28/44',
        'latitude': 50.0477,
        'longitude': 6.2751
      },
      {
        'label': 'Bastogne - Medical',
        'place': 'Wardin',
        'date': '12/28/44',
        'latitude': 49.9911,
        'longitude': 5.7882
      }
    ];


    // @ts-ignore
    return newVar;
  }

  ngOnInit() {
    this.markers = this.getLocations();

    this.mapsAPILoader.load().then(() => {
      const center = new google.maps.LatLng(this.lat, this.lng);
      this.filteredMarkers = this.markers.filter(m => {
        const markerLoc = new google.maps.LatLng(m.latitude, m.longitude);
        const  distanceInKm = google.maps.geometry.spherical.computeDistanceBetween(markerLoc, center) / 1000;
        if (distanceInKm < 10000.0) {
          return m;
        }
      });
    });
  }
}


import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';
import { HttpClientModule} from '@angular/common/http';
import { MarkerService} from './marker.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA4jVrGqv7fXG2G2sJUziSS-1enptZq8xg',
      libraries: ['geometry']
    }),
    HttpClientModule],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }

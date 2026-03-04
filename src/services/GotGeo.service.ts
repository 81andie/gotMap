import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GotGeometry } from '../interfaces/got.interface';
import { GotFeature } from '../interfaces/got.interface';

@Injectable({ providedIn: 'root' })

export class GotGeoService {

  constructor(private http: HttpClient){}

   private geoLocalize = 'assets/prueba.geojson';

   

  getLocalization(){
  return this.http.get<[GotGeometry]>(this.geoLocalize)
}

  getLocalizationMarkers(){
  return this.http.get<[GotFeature]>(this.geoLocalize)
}





}

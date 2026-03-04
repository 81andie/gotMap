import { Component, OnInit } from '@angular/core';
import { Map, NavigationControl } from 'maplibre-gl';
import MinimapControl from "maplibregl-minimap";
import { GotGeoService } from '../../../services/GotGeo.service';
import { GotFeature, GotGeometry, } from '../../../interfaces/got.interface';
import { CommonModule } from '@angular/common';
import { FeatureCollection } from 'geojson';



@Component({
  selector: 'app-map',
  imports: [CommonModule],
  templateUrl: './map.html',
  styleUrl: './map.css',
})
export class Maps implements OnInit {

  constructor(private geoService: GotGeoService) { }

  map!: Map;

  private markers: GotFeature[] = []

  ngOnInit(): void {

  this.getMap()
  }

  getMap() {

    let nav = new NavigationControl();

    this.map = new Map({
      container: 'map',
      style: 'https://api.maptiler.com/maps/backdrop-v4/style.json?key=bZ943IENWwexU3umotpo', // stylesheet location
      center: [-3.5, 40], // starting position [lng, lat]
      zoom: 3 // starting zoom,

    });

    const miniMap = new Map({
      container: 'minimap',
      style: 'https://api.maptiler.com/maps/backdrop-v4/style.json?key=bZ943IENWwexU3umotpo',
      center: [-74.5, 40],
      zoom: 4,
      attributionControl: false

    });


    this.map.on('load', () => {
      miniMap.setCenter(this.map.getCenter());
      miniMap.setZoom(Math.max(this.map.getZoom() - 5, 0));
    });

    this.map.on('move', () => {
      miniMap.setCenter(this.map.getCenter());
      miniMap.setZoom(Math.max(this.map.getZoom() - 5, 0));
    });

    this.map.addControl(nav, 'top-left');
  }




}
































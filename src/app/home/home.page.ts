import { Component, OnInit } from '@angular/core';
import { ISpot } from '../shared/spot';
import { Router } from '@angular/router';
import { SpotdbService } from '../core/spotdbservice.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  public spots: ISpot[];
  spotsinit: ISpot[] = []

  constructor(private spotdbService: SpotdbService, private route: Router) { }
  ngOnInit(): void {
    // If the database is empty set initial values
    this.inicialization();
  }
  ionViewDidEnter() {
    // Remove elements if it already has values
    if (this.spots !== undefined) {
      this.spots.splice(0);
    }
    this.retrieveValues();
  }
  inicialization() {
    if (this.spotdbService.empty()) {
      this.spotsinit.forEach(spot => {
        this.spotdbService.setItem(spot.id, spot);
      });
    }
  }
  retrieveValues() {
    // Retrieve values
    this.spotdbService.getAll().then(
      (data) => this.spots = data
    );
  }
  movieTapped(spot) {
    this.route.navigate(['details', spot.id]);
  }
}



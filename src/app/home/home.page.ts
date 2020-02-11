import { Component, OnInit } from '@angular/core';
import {Spot} from '../shared/spot';
import {SpotService} from '../shared/spot.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  public spots: Spot[];
  spotsinit: Spot[] = []
  

  constructor(private spotService: SpotService,private router: Router) { }


  ngOnInit(): void {
    // If the database is empty set initial values
    
  }
  ionViewDidEnter() {
    // Remove elements if it already has values
    if (this.spots !== undefined) {
      this.spots.splice(0);
    }
    this.retrieveValues();
  }
  
  retrieveValues() {
    // Retrieve values
    this.spotService.getSpots().subscribe(
      (data) => this.spots = data
    );
  }
  maskTapped(spot) {
    this.router.navigate(['details', spot.id]);
  }
}



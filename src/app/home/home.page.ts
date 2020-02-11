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

  spots: Spot[]=[];
  

  constructor(private spotService: SpotService,private router: Router) { }


  ngOnInit() {
   }

   ionViewDidEnter() {
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
    this.router.navigate(['spot-detail', spot.id]);
  }

}




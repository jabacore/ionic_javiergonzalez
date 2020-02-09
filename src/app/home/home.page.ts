import { Component, OnInit } from '@angular/core';
import {Spot} from '../shared/spot';
import {SpotService} from '../shared/spot.service';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  spots: Spot[]=[];

  constructor(private spotService: SpotService) { }


  ngOnInit() {
    this.spotService.getSpots().subscribe(
     (data: Spot[]) => this.spots = data
    );
   }
  

}



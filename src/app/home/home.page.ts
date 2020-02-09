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
  
  id : any;

  constructor(private spotService: SpotService,private router: Router) { }


  ngOnInit() {
    this.spotService.getSpots().subscribe(
     (data: Spot[]) => this.spots = data
    );
   }

   newProduct(){
    // Get max product Id from the product list
    this.spotService.getMaxSpotId().subscribe(
      data => this.id = data
    );
    this.router.navigate(['/spots', this.id, 'new'])

}
  

}



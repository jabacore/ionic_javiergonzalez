import { Component, OnInit } from '@angular/core';
import { ISpot } from '../shared/spot';
import { Router } from '@angular/router';
import { SpotdbService } from '../core/spotdbservice.service';
import { SpotcrudService } from '../core/spotcrud.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  spots: any;

  constructor(private spotcrudService: SpotcrudService) { }
  ngOnInit(): void {
    this.spotcrudService.read_Spots().subscribe(data => {
      this.spots = data.map(e => {
        return {
          id: e.payload.doc.id,
          isEdit: false,
          title: e.payload.doc.data()['title'],
          image: e.payload.doc.data()['image'],
          description: e.payload.doc.data()['description']
        };
      })
      console.log(this.spots);
    });
  }


  movieTapped(spot) {
    this.route.navigate(['details', spot.id]);
  }
  





}



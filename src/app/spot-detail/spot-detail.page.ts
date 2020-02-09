import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Spot } from '../shared/spot';
import { SpotService } from '../shared/spot.service';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.page.html',
  styleUrls: ['./spot-detail.page.scss'],
})
export class SpotDetailPage implements OnInit {

  errorMessage: string;
  spotForm: FormGroup;
  spot: Spot;
  spotId: number;

  constructor(private fb: FormBuilder,private activatedroute: ActivatedRoute, private router: Router, private spotService: SpotService) {}


  ngOnInit() {
    this.spotId = parseInt(this.activatedroute.snapshot.params['spotId']);
    this.spotService.getSpotById(this.spotId).subscribe(
      (data: Spot) => this.spot = data
    );
    
    this.spotForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],  
      description: '',
      image: ''
  });

  };

  goEdit():void{
    this.router.navigate(['/spots', this.spotId, 'edit']);
  }
  onBack(): void {
    this.router.navigate(['']);
  }

  
  deleteSpot(): void {
    if (this.spot.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Really delete the spot: ${this.spot.title}?`)) {
        this.spotService.deleteSpot(this.spot.id)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );
      }
    }
  }

  onSaveComplete(): void {
    this.spotForm.reset();
    this.router.navigate(['']);
  }


}

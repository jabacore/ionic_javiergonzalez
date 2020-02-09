import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Spot } from '../shared/spot';
import { SpotService } from '../shared/spot.service';



@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.page.html',
  styleUrls: ['./spot-edit.page.scss'],
})
export class SpotEditPage implements OnInit {

  pageTitle = 'Spot Edit';
  errorMessage: string;
  spotForm: FormGroup;

  spotId: number;
  spot: Spot;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private spotService: SpotService) { }

  ngOnInit() {
    this.spotForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],
      description: '',
      image: ''
    });
    this.spotId = parseInt(this.activatedroute.snapshot.params['id']);
    this.getSpot(this.spotId);
  }

  getSpot(id: number): void {
    this.spotService.getSpotById(id)
      .subscribe(
        (spot: Spot) => this.displaySpot(spot),
        (error: any) => this.errorMessage = <any>error
      );
  }

  displaySpot(spot: Spot): void {
    if (this.spotForm) {
      this.spotForm.reset();
    }
    this.spot = spot;
    this.pageTitle = `Edit Spot: ${this.spot.title}`;

    // Update the data on the form
    this.spotForm.patchValue({
      title: this.spot.title,
      description: this.spot.description,
      image: this.spot.image
    });
  }



  saveSpot(): void {
    if (this.spotForm.valid) {
      if (this.spotForm.dirty) {
        this.spot = this.spotForm.value;
        this.spot.id = this.spotId;

        this.spotService.updateSpot(this.spot)
          .subscribe(
            () => this.onSaveComplete(),
            (error: any) => this.errorMessage = <any>error
          );


      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Please correct the validation errors.';
    }
  }

  onSaveComplete(): void {
    this.spotForm.reset();
    this.router.navigate(['']);
  }


}

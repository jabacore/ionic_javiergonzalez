import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Spot } from '../shared/spot';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SpotService } from '../shared/spot.service';
@Component({
  selector: 'app-spot-new',
  templateUrl: './spot-new.page.html',
  styleUrls: ['./spot-new.page.scss'],
})
export class SpotNewPage implements OnInit {
  
  pageTitle = 'Spot New';
  errorMessage: string;
  spotForm: FormGroup;
  
  spotId:number;
  spot: Spot;

  constructor(private fb: FormBuilder,
    private activatedroute: ActivatedRoute,
    private router: Router,
    private spotService: SpotService) {  }

  ngOnInit() {
    this.spotForm = this.fb.group({
      title: ['', [Validators.required,
      Validators.minLength(3),
      Validators.maxLength(50)]],   
      description: '',
      image: ''
    });
     // Read the spots Id from the route parameter
     this.spotId = parseInt(this.activatedroute.snapshot.params['spotId']);
  }

  saveSpot(): void {
    if (this.spotForm.valid) {
      if (this.spotForm.dirty) {
        this.spot = this.spotForm.value;
        this.spot.id = this.spotId;
        
        this.spotService.createSpot(this.spot)
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
    // Reset the form to clear the flags
    this.spotForm.reset();
    this.router.navigate(['']);
  }


}

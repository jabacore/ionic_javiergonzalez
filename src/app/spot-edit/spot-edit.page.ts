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

  id: string;
  spot: Spot;
  spotForm: FormGroup;
  constructor(
    private activatedrouter: ActivatedRoute,
    private router: Router,
    private spotService: SpotService,
    public toastController: ToastController
  ) { }
  ngOnInit() {
    this.id = this.activatedrouter.snapshot.params.id;
    this.spotService.getSpotById(this.id).subscribe(
      (data: Spot) => {
        this.spot = data
        this.spotForm.get('title').setValue(this.spot.title);
        this.spotForm.get('image').setValue(this.spot.image);
        this.spotForm.get('description').setValue(this.spot.description);
      }
    );
    this.spotForm = new FormGroup({
      title: new FormControl(''),
      image: new FormControl(''),
      description: new FormControl(''),
    });
  }
  async onSubmit() {
    const toast = await this.toastController.create({
      header: 'Guardar Spot',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'save',
          text: 'ACEPTAR',
          handler: () => {
            this.saveSpot();
            this.router.navigate(['home']);
          }
        }, {
          text: 'CANCELAR',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    toast.present();
  }
  saveSpot() {
    //this.spotService.deleteSpot(this.id);
    this.spot = this.spotForm.value;
    //let nextKey = this.spot.title.trim();
    this.spot.id = this.id;
    this.spotService.updateSpot(this.spot).subscribe();
    console.warn(this.spotForm.value);
  }


}

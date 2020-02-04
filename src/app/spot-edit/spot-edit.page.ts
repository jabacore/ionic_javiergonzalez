import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpot } from '../shared/spot';
import { SpotdbService } from '../core/spotdbservice.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.page.html',
  styleUrls: ['./spot-edit.page.scss'],
})
export class SpotEditPage implements OnInit {

  id: string;
  spot: ISpot;
  spotForm: FormGroup;

  constructor(private activatedrouter: ActivatedRoute,private router: Router, private spotdbService: SpotdbService, public toastController: ToastController) { }

  ngOnInit() {

    this.id = this.activatedrouter.snapshot.params.id;
    this.spotdbService.getItem(this.id).then(
      (data: ISpot) => {
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
    this.spotdbService.remove(this.id);
    this.spot = this.spotForm.value;
    let nextKey = this.spot.title.trim();
    this.spot.id = nextKey;
    this.spotdbService.setItem(nextKey, this.spot);
    console.warn(this.spotForm.value);
  }


}

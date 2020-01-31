import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ISpot } from '../shared/spot';
import { SpotdbService } from '../core/spotdbservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-spot-new',
  templateUrl: './spot-new.page.html',
  styleUrls: ['./spot-new.page.scss'],
})
export class SpotNewPage implements OnInit {

  spot: ISpot;
  spotForm: FormGroup;


  constructor(private router: Router, private spotdbService: SpotdbService, public toastController: ToastController) { }

  ngOnInit() {

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
    this.spot = this.spotForm.value;
    let nextKey = this.spot.title.trim();
    this.spot.id = nextKey;
    this.spotdbService.setItem(nextKey, this.spot);
    console.warn(this.spotForm.value);
  }


}

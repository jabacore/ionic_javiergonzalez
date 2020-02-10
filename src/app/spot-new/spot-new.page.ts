import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ISpot } from '../shared/spot';
import { SpotdbService } from '../core/spotdbservice.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { SpotcrudService } from '../core/spotcrud.service';

@Component({
  selector: 'app-spot-new',
  templateUrl: './spot-new.page.html',
  styleUrls: ['./spot-new.page.scss'],
})
export class SpotNewPage implements OnInit {
  
  spotForm: FormGroup;


  constructor(private router: Router, private spotcrudService: SpotcrudService, public toastController: ToastController) { }

  ngOnInit() {

    this.spotForm = new FormGroup({
      spotTitle: new FormControl(''),
      spotImage: new FormControl(''),
      spotDescription: new FormControl(''),
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
            this.CreateRecord();
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


  CreateRecord() {
    //this.spotForm.controls.spotImage;
    let record = {};
    record['title'] = this.spotForm.controls.spotTitle.toString();
    record['image'] = "http://IEhfehif.com"
    record['description'] = "funciona";
    this.spotcrudService.create_Spot(record).then(resp => {

      console.log(resp);
    })
      .catch(error => {
        console.log(error);
      });
  }


}

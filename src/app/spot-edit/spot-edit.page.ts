import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpot } from '../shared/spot';
import { SpotdbService } from '../core/spotdbservice.service';
import { ToastController } from '@ionic/angular';
import { SpotcrudService } from '../core/spotcrud.service';

@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.page.html',
  styleUrls: ['./spot-edit.page.scss'],
})
export class SpotEditPage implements OnInit {

  id: string;
  spot: ISpot;
  spotForm: FormGroup;

  constructor(private activatedrouter: ActivatedRoute,private router: Router, private spotcrudService: SpotcrudService, public toastController: ToastController) { }

  ngOnInit() {

    this.id = this.activatedrouter.snapshot.params.id;
    

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
            this.UpdateRecord(this.spot);
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


  EditRecord(record) {
    record['title'] = record.EditTitle;
    record['image'] = record.EditImage;
    record['descrition'] = record.EditDescription;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['title'] = recordRow.EditTitle;
    record['image'] = recordRow.EditImage;
    record['descrition'] = recordRow.EditDescription;
    this.spotcrudService.update_Spot(recordRow.id, record);
    recordRow.isEdit = false;
    
  }

  


}

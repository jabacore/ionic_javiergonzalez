import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ISpot } from '../shared/spot';
import { SpotdbService } from '../core/spotdbservice.service';
import { ToastController } from '@ionic/angular';
import { SpotcrudService } from '../core/spotcrud.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-spot-edit',
  templateUrl: './spot-edit.page.html',
  styleUrls: ['./spot-edit.page.scss'],
})
export class SpotEditPage implements OnInit {

  id: string;
  spot: ISpot;
  spotForm: FormGroup;

  title: String;
  image: string;
  description: string;


  constructor(private activatedrouter: ActivatedRoute,private router: Router, private spotcrudService: SpotcrudService, public toastController: ToastController) { }

  ngOnInit() {

    this.id = this.activatedrouter.snapshot.params.id;
    
    this.spotcrudService.read_Spots().subscribe(data=>{
      data.map(e => {
     if(e.payload.doc.id == this.id)
      { 
         this.title= e.payload.doc.data()['title'].setValue(this.spot.title),
         this.image = e.payload.doc.data()['image'].setValue(this.spot.image),
         this.description = e.payload.doc.data()['description'].setValue(this.spot.description)
       
      }
     })
    });


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
    record['title'] = record.title;
    record['image'] = record.image;
    record['description'] = record.description;
  }

  UpdateRecord(recordRow) {
    let record = {};
    record['title'] = this.title;
    record['image'] = this.image;
    record['description'] = this.description;
    this.spotcrudService.update_Spot(this.id, record);
    recordRow.isEdit = false;
    
  }

  


}

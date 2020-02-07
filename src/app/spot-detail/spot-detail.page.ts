import { Component, OnInit } from '@angular/core';
import { ISpot } from '../shared/spot';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotdbService } from '../core/spotdbservice.service';
import { ToastController } from '@ionic/angular';
import { SpotcrudService } from '../core/spotcrud.service';

@Component({
  selector: 'app-spot-detail',
  templateUrl: './spot-detail.page.html',
  styleUrls: ['./spot-detail.page.scss'],
})
export class SpotDetailPage implements OnInit {

  id: string;
  public spot: ISpot;

  constructor(private activatedrouter: ActivatedRoute,
    private router: Router,
    private spotcrudService: SpotcrudService,
    public toastController: ToastController) { }

  ngOnInit() {
    this.id = this.activatedrouter.snapshot.params.id;

  }

  
  editRecord(recordRow) {
    let record = {};
    record['title'] = recordRow.EditTitle;
    record['image'] = recordRow.EditImage;
    record['descrition'] = recordRow.EditDescription;
    this.spotcrudService.update_Spot(recordRow.id, record);
    recordRow.isEdit = false;
  }

  async removeRecord(id) {
    const toast = await this.toastController.create({
      header: 'Elimiar Spot',
      position: 'top',
      buttons: [
        {
          side: 'start',
          icon: 'delete',
          text: 'ACEPTAR',
          handler: () => {
            this.spotcrudService.delete_Spot(id);
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



}

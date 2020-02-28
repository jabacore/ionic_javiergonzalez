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

  id: string;
  public spot: Spot;
  constructor(
      private activatedrouter: ActivatedRoute,
      private router: Router,
      private spotService: SpotService,
      public toastController: ToastController
  ) { }
  ngOnInit() {
      this.id = this.activatedrouter.snapshot.params.id;
      this.spotService.getSpotById(this.id).subscribe(
          (data: Spot) => this.spot = data
      );
  }

  editRecord(spot) {
      this.router.navigate(['spot-edit', spot.id])
  }
  async removeRecord(id) {
      const toast = await this.toastController.create({
          header: 'Eliminar Spot',
          position: 'top',
          buttons: [
              {
                  side: 'start',
                  icon: 'delete',
                  text: 'ACEPTAR',
                  handler: () => {
                      this.spotService.deleteSpot(id).subscribe();
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

import { Component, OnInit } from '@angular/core';
import { ISpot } from '../shared/spot';
import { ActivatedRoute, Router } from '@angular/router';
import { SpotdbService } from '../core/spotdbservice.service';
import { ToastController } from '@ionic/angular';

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
    private spotdbService: SpotdbService,
    public toastController: ToastController) { }

    ngOnInit() {
      this.id = this.activatedrouter.snapshot.params.id;
      this.spotdbService.getItem(this.id).then(
        (data: ISpot) => this.spot = data
      );
    }
    editRecord(spot) {
      this.router.navigate(['edit', spot.id])
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
              this.spotdbService.remove(id);
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

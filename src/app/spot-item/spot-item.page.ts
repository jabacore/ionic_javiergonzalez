import { Component, OnInit, Input } from '@angular/core';
import { Spot } from '../shared/spot';

@Component({
  selector: 'app-spot-item',
  templateUrl: './spot-item.page.html',
  styleUrls: ['./spot-item.page.scss'],
})
export class SpotItemPage  {

  @Input() spot: Spot;

}

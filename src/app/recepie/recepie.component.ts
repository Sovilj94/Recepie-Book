import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../models/recepie.model';
import { RecepieService } from './recepie.service';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {


  recepieSelected: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepieService.selectedRecepie.subscribe((recepie:Recepie) => {
      this.recepieSelected = recepie;

    })
  }

}

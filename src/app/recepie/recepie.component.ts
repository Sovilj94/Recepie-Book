import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../models/recepie.model';

@Component({
  selector: 'app-recepie',
  templateUrl: './recepie.component.html',
  styleUrls: ['./recepie.component.css']
})
export class RecepieComponent implements OnInit {


  recepieSelected: Recepie;

  constructor() { }

  ngOnInit(): void {
  }

  recepieClicked(recepie: Recepie){

    console.log()
    this.recepieSelected = recepie;

  }

}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  constructor() { }

  @Output() event = new EventEmitter<any>();

  @Input() recepie: Recepie;

  ngOnInit(): void {
  }

  recepieSelected(recepie: Recepie){

    this.event.emit(recepie);

  }



}

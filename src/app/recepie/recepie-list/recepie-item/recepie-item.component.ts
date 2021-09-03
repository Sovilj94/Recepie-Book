import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/models/recepie.model';
import { RecepieService } from '../../recepie.service';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  constructor(private recepieService: RecepieService) { }

  @Input() recepie: Recepie;

  ngOnInit(): void {
  }

  recepieSelected(recepie: Recepie){

    this.recepieService.selectedRecepie.emit(recepie);

  }



}

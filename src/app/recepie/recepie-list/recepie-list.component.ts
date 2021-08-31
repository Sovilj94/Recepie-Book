import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from 'src/app/models/recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {
  recepies: Recepie[] = [
    new Recepie('A test Recepie','dis is dis', 'https://cdn.pixabay.com/photo/2017/06/21/22/42/recipe-2428926_1280.jpg'),
    new Recepie('A test Recepie number 2','toe toe','https://p0.pxfuel.com/preview/995/747/603/recipe-dish-lunch-nutrition.jpg')
  ];
@Output()  event = new EventEmitter<Recepie>();

  constructor() { }

  ngOnInit(): void {
  }

  recepieSelected(rec: Recepie){

    console.log('list')
    console.log(rec);
    this.event.emit(rec);

  }

}

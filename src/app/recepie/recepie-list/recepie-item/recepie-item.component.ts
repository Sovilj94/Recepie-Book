import { Component, Input, OnInit } from '@angular/core';
import { Recepie } from 'src/app/models/recepie.model';

@Component({
  selector: 'app-recepie-item',
  templateUrl: './recepie-item.component.html',
  styleUrls: ['./recepie-item.component.css']
})
export class RecepieItemComponent implements OnInit {

  constructor() { }

  @Input() recepies: Recepie[];

  ngOnInit(): void {

    console.log(this.recepies);
  }

}

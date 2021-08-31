import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Recepie } from 'src/app/models/recepie.model';
import { RecepieComponent } from '../recepie.component';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {


  @Input() recepie : Recepie;

  constructor() { }

  ngOnInit(): void {
  }



}

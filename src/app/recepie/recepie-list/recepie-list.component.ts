import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recepie } from 'src/app/models/recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

    recepies: Recepie[] = [];

  constructor(private recepieService: RecepieService, private activatedRout: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.recepieService.changedRecepie.subscribe((result:Recepie[]) => {

      console.log(result);

      this.recepies = result
    })
  }

  onNewRecepie(){
      this.router.navigate(['new'],{relativeTo: this.activatedRout});
  }

}

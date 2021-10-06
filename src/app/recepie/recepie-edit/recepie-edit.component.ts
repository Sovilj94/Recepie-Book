import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Ingredient } from 'src/app/models/ingredient.model';
import { Recepie } from 'src/app/models/recepie.model';
import { RecepieService } from '../recepie.service';

@Component({
  selector: 'app-recepie-edit',
  templateUrl: './recepie-edit.component.html',
  styleUrls: ['./recepie-edit.component.css']
})
export class RecepieEditComponent implements OnInit {

  id:number;
  editMode = false;
  recepieForm: FormGroup;

  constructor(private activatedRout: ActivatedRoute, private recepieService: RecepieService, private router: Router) { }

  ngOnInit(): void {

    this.activatedRout.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    })

  }


  private initForm(){
      const recepie = this.recepieService.getRecepie(this.id);
      let recepieName = '';
      let recepieImagePath = '';
      let recepieDescription = '';
      let recepieIngredients = new FormArray([]); 

      if(this.editMode){
        recepieName = recepie.name;
        recepieImagePath = recepie.imagePath;
        recepieDescription = recepie.description;

        if(recepie.ingrediants){
          for(let ingredient of recepie.ingrediants){
              recepieIngredients.push(new FormGroup({
                  name: new FormControl(ingredient.name,Validators.required),
                  amount: new FormControl(ingredient.amount,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
              }))
          }
        }

      }

      this.recepieForm = new FormGroup({
        name: new FormControl(recepieName, Validators.required),
        imagePath: new FormControl(recepieImagePath, Validators.required),
        description: new FormControl(recepieDescription, Validators.required),
        ingredients: recepieIngredients
      });
  }

  onSubmit(){
  
  let ids = this.recepieService.getRecepies().map(x => x.id);
  let maxId = Math.max(...ids);

    const newRecepie = new Recepie(maxId + 1,this.recepieForm.value['name'],
    this.recepieForm.value['description'],
    this.recepieForm.value['imagePath'],
    this.recepieForm.value['ingredients']);

    const updateRecepie = new Recepie(this.id,this.recepieForm.value['name'],
    this.recepieForm.value['description'],
    this.recepieForm.value['imagePath'],
    this.recepieForm.value['ingredients'])

      if(this.editMode){
        this.recepieService.updateRecepie(updateRecepie,this.id);
        console.log(updateRecepie);
      }else{
        this.recepieService.addRecepie(newRecepie);
      }
      this.onCancel();
  }

  get controls() { // a getter!
    return (<FormArray>this.recepieForm.get('ingredients')).controls;
  }

  onAddIngredient(){
    (<FormArray>this.recepieForm.get('ingredients')).push(new FormGroup({
      name: new FormControl(null, Validators.required),
      amount: new FormControl(null,[Validators.required, Validators.pattern(/^[1-9]+[0-9]*$/)])
    }))
  }

  onCancel(){
      this.router.navigate(['../'], {relativeTo: this.activatedRout});
  }

  onDeleteIngredient(index: number){
    
    (<FormArray>this.recepieForm.get('ingredients')).removeAt(index);
  }

}

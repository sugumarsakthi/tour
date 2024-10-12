import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators,NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SuccessComponent } from '../shared/success/success.component';
import {
  MatDialog,
  // MatDialogActions,
  // MatDialogClose,
  // MatDialogContent,
  // MatDialogTitle,
} from '@angular/material/dialog';

export interface PeriodicElement {
  position:number,
  name:string,
  desc:string,
  amount:number
}

const Element_Data: PeriodicElement []= [
  {position:1,name:"Kotti",desc:'advance',amount:2000},
  {position:2,name:"Gopi",desc:'advance',amount:2000},
  {position:3,name:"Sugumar",desc:'advance',amount:2000},
]

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent {
  readonly dialog = inject(MatDialog);
  displayedColumns:string[] =  ['position','name','desc','amount'];
  dataSource = new MatTableDataSource(Element_Data);
  personForm!: FormGroup;
  constructor(private fb: FormBuilder){
    this.personForm = this.fb.group({
      personname: new FormControl('',[Validators.required]),
      amount:new FormControl('',[Validators.required]),
      description:new FormControl('',[Validators.required]), 
    })
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  onsubmit(){
    if(this.personForm.valid){
      this.dialog.open(SuccessComponent);
      console.log(this.personForm.value);
      this.personForm.reset();
    }
    else{
      this.personForm.markAllAsTouched();
    }
  }  
  addperson(){}
}

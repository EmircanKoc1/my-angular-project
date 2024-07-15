import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

frm: FormGroup;


constructor(private formBuilder: FormBuilder){
this.frm = formBuilder.group({
  name:["emircan",Validators.required],
  surname:[""],
  email:[""],
  tel:[""],
  addressGroup: formBuilder.group({
    country:[""],
    city:[""],
    address:[""]
  })
})
}

onSubmit(){
  console.log(this.frm.value);
  
}



}

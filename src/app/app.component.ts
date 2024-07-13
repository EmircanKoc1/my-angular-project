import { Component, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
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
  name:[""],
  surname:[""],
  email:[""],
  tel:[""]
})
}

onSubmit(){
  console.log(this.frm.value);
  
}



}

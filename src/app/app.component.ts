import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-angular-project';

  @ViewChild("frm",{static:true}) frm :  NgForm;


  onSubmit(data) { 
  console.log(data);
  console.log(this.frm.value);
    
}


}

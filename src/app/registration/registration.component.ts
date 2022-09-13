import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,router: Router) { }

  selectedItem!:number;

  signupForm!: FormGroup;
  secFormGroup!:FormGroup;
  
 
  title = 'formValidation';
  submit = false; 

  keyPressNumbers(event: { which: any; keyCode: any; preventDefault: () => void; }) {
    var charCode = (event.which) ? event.which : event.keyCode;
    // Only Numbers 0-9
    if ((charCode < 48 || charCode > 57)) {
      event.preventDefault();
      return false;
    } else {
      return true;
    }
  }

  ngOnInit(): void {

    this.signupForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(20)]],
      email: ['', [Validators.required, Validators.minLength(12), Validators.email]],
      phnumber: ['', [Validators.required, Validators.minLength(10), Validators.pattern("^[0-9]*$"), Validators.maxLength(10)]]
    }) 

  }

  reg() {
    this.submit = true

    if (this.signupForm.invalid) {
      return
    }
   console.log(this.signupForm.value)

  }
  mailotp(type:number){
    console.log(type);
    this.selectedItem = type;
   this.signupForm.value.email 
   
  }

  goForward(stepper: MatStepper){
    stepper.next();
}

  // otp verify page

  move(e:any,p:any,c:any,n:any){
    var length=c.value.length;
    var maxlength=c.getAttribute("maxlength");
    if(length==maxlength){
      if(n !=''){
        n.focus(); 
  
      }
   }
       if(e.key==="Backspace") {
        if(p !=''){
          p.focus();
  
        }
        
       }
    }
  




    
 
}

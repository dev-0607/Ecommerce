import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent {
  logindata = new FormGroup({
    username : new FormControl('',[Validators.required,Validators.pattern('[azA-Z]')]),
    entphno :new FormControl('',[Validators.required,]),
    mail :new FormControl('',[Validators.required,Validators.email]),
    entpswd:new FormControl('',[Validators.required,Validators.minLength(6)]),

  })
  loginuser(){
    console.log(this.logindata.value)
  }
  get user(){
    return this.logindata.get('username')
  }
  get phno(){
    return this.logindata.get('entphno')
  }

  get mail(){
    return this.logindata.get('mail')
  }

  get password(){
    return this.logindata.get('entpswd')
  }
}

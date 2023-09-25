import { Options, LabelType } from '@angular-slider/ngx-slider';
import { Component, OnInit } from '@angular/core';
import {FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';


  @Component({
    selector: 'app-contact-form',
    templateUrl: './contact-form.component.html',
    styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form: FormGroup;
  cotizar: FormGroup;


options: Options = {
  floor: 0,
  ceil: 100
};


  
 constructor(
  private formBuilder: FormBuilder
  ) { 
    this.buildForm();
    this.buildFormCotizar();
  } 


private buildForm(){
  this.form =this.formBuilder.group({
    fullName: this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      last: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    }),
    email: ['',[Validators.required,Validators.email]],
    phone: ['',Validators.required],
    color:['#000000'],
    date: [''],
    age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
    category: [''],
    tag: [''],
    agree: [false, [Validators.requiredTrue]],
    gender: [''],
    zone: [''],
    control : new FormControl([20, 80]),
  });

}

private buildFormCotizar(){
  this.cotizar =this.formBuilder.group({
    fullName: this.formBuilder.group({
      name: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
      last: ['',[Validators.required, Validators.maxLength(10),Validators.pattern(/^[a-zA-Z\s]*$/)]],
    }),
    email: ['',[Validators.required,Validators.email]],
    phone: ['',Validators.required],
    color:['#000000'],
    date: [''],
    age: [18, [Validators.required, Validators.min(18), Validators.max(100)]],
    category: [''],
    tag: [''],
    agree: [false, [Validators.requiredTrue]],
    gender: [''],
    zone: [''],
    control : new FormControl([20, 80]),
  });

}

save(event){
  if(this.form.valid){
    console.log(this.form.value)
  } else {
    this.form.markAllAsTouched();
  }
}


salvar(event){
  if(this.form.valid){
    console.log(this.form.value)
  } else {
    this.form.markAllAsTouched();
  }
}

  ngOnInit()
  
   {
    // this.nameField.valueChanges
    // .subscribe(value => {
    //   console.log(value);

    // }      )
    // this.form.valueChanges
    // .subscribe(value => {
    //   console.log(value);
    // });
 
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

get nameField(){
  return this.form.get('fullName.name');
  }
  get lastField(){
    return this.form.get('fullName.last');
  }
get emailField(){
  return this.form.get('email');
}
get phoneField(){
  return this.form.get('phone');
}
get colorField(){
  return this.form.get('color');
}
get dateField(){
  return this.form.get('date');
}
get ageField(){
  return this.form.get('age');
}
get categoryField(){
  return this.form.get('category');
}
get tagField(){
  return this.form.get('tag');
}
get agreeField(){
  return this.form.get('agree');
}
get genderField(){
  return this.form.get('gender');
}
get zoneField(){
  return this.form.get('zone');
}
get contro(){
  return this.form.get('control');
}
  get isNameFieldValid(){
    return this.nameField.touched && this.nameField.valid;
  }
  get isNameFieldInvalid(){
    return this.nameField.touched && this.nameField.invalid;
  }




}
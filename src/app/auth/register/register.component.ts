import { RegisterForm } from './../../types/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  form: RegisterForm = {
    email: '',
    password: '',
    confirm_password: ''
  }

  submit() {
    console.log(this.form);
  }

}

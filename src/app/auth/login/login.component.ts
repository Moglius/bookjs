import { LoginForm } from './../../types/auth';
import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  form: LoginForm = {
    email: '',
    password: ''
  }

  submit() {
    console.log(this.form);
  }
}

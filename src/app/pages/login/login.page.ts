import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  loginForm: FormGroup;

  constructor(
    public builder: FormBuilder,
    public router: Router
  ) {
    this.loginForm = builder.group({
      'username': [
        '', // default value
        Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(255)])
      ],
      'password': [
        '',
        Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(32)])
      ]
    });
  }

  ngOnInit() {
  }

  loginSubmit() {
    console.log('submitted');
  }

  loginSuccess() {
    console.log('login success');
    this.router.navigateByUrl("/side-menu")
  }

}

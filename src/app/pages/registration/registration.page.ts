import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {
  registrationForm: FormGroup;

  constructor(
    public builder: FormBuilder
  ) {
    this.registrationForm = builder.group({
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

  register_form() {
    console.log('registered success');
  }

}

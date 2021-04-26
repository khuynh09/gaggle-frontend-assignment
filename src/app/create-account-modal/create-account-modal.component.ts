import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-create-account-modal',
  templateUrl: './create-account-modal.component.html',
  styleUrls: ['./create-account-modal.component.css'],
})
export class CreateAccountModalComponent implements OnInit {
  newAccountForm = this.formBuilder.group({
    username: '',
    password: '',
    email: '',
  });
  breakpoint: number = 0;
  fieldTextType: boolean = false;
  eyeOpenIcon: string = '../../assets/icon--eye-open.svg';
  eyeCloseIcon: string = '../../assets/icon--eye-closed.svg';
  alert: string = '../../assets/icon--alert.svg';
  newAccount: string = '../../assets/hatching-duck.png';

  missingValues = { username: false, password: false, email: false };
  invalidInputs: boolean = false;
  errorMessage: string = 'No value provided';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 640 ? 1 : 4;
  }

  onSubmit(): void {
    // this.newAccountForm.reset();

    this.missingValues.username = false;
    this.missingValues.password = false;
    this.missingValues.email = false;

    if (!this.newAccountForm.controls['username'].value)
      this.missingValues.username = true;
    if (!this.newAccountForm.controls['password'].value)
      this.missingValues.password = true;
    if (!this.newAccountForm.controls['email'].value)
      this.missingValues.email = true;
  }

  closeModal(): void {}

  togglePassword(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onResize(): void {
    console.log(window.innerWidth);
    this.breakpoint = window.innerWidth <= 640 ? 1 : 4;
  }
}

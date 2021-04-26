import { ngModuleJitUrl } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { CreateAccountModalComponent } from '../create-account-modal/create-account-modal.component';

@Component({
  selector: 'app-sign-on',
  templateUrl: './sign-on.component.html',
  styleUrls: ['./sign-on.component.css'],
})
export class SignOnComponent implements OnInit {
  loginForm = this.formBuilder.group({
    username: '',
    password: '',
  });

  credentials = { username: 'gaggletester', password: 'tester123' };
  stock: string = '../../assets/hero-image.png';
  logo: string = '../../assets/logo--Gaggle.svg';
  eyeOpenIcon: string = '../../assets/icon--eye-open.svg';
  eyeCloseIcon: string = '../../assets/icon--eye-closed.svg';
  clear: string = '../../assets/icon--saltire.svg';
  alert: string = '../../assets/icon--alert.svg';
  breakpoint: number = 0;
  missingValues = { username: false, password: false };
  invalidInputs: boolean = false;
  errorMessage: string = '';

  fieldTextType: boolean = false;
  constructor(
    public dialog: MatDialog,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  togglePassword(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 640 ? 1 : 2;
  }

  onSubmit(): void {
    // Process checkout data here
    // this.loginForm.reset();

    this.missingValues.username = false;
    this.missingValues.password = false;
    this.invalidInputs = false;

    if (
      this.loginForm.controls['username'].value &&
      this.loginForm.controls['password'].value
    ) {
      if (
        this.loginForm.controls['username'].value ==
          this.credentials.username &&
        this.loginForm.controls['password'].value == this.credentials.password
      ) {
        this.router.navigate(['/application']);
      } else {
        this.invalidInputs = true;
        this.errorMessage = 'Invalid username or password';
      }
    } else {
      if (this.loginForm.controls['username'].value == '') {
        this.missingValues.username = true;
        this.errorMessage = 'No value provided';
      }
      if (this.loginForm.controls['password'].value == '') {
        this.missingValues.password = true;
        this.errorMessage = 'No value provided';
      }
    }
  }

  openCreateAccountModel() {
    const dialogRef = this.dialog.open(CreateAccountModalComponent);
  }

  onResize(event: any) {
    this.breakpoint = event.target.innerWidth <= 640 ? 1 : 2;
  }

  clearPassword() {
    this.loginForm.controls['password'].setValue('');
  }
}

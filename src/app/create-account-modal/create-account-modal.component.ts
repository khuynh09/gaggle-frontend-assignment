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
  newAccount: string = '../../assets/hatching-duck.png';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.breakpoint = window.innerWidth <= 640 ? 1 : 4;
  }

  onSubmit(): void {
    // Process checkout data here
    this.newAccountForm.reset();
  }

  togglePassword(): void {
    this.fieldTextType = !this.fieldTextType;
  }

  onResize(): void {
    console.log(window.innerWidth);
    this.breakpoint = window.innerWidth <= 640 ? 1 : 4;
  }
}

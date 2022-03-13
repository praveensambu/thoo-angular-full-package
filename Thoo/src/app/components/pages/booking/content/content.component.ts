import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent {
  bookingForm = new FormGroup({
    firstname: new FormControl('', [Validators.required]),
    lastname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required]),
    verifyemail: new FormControl('', [Validators.required]),
    country: new FormControl('', [Validators.required]),
    phone: new FormControl('', [Validators.required]),
    cardInfo: new FormGroup({
      cardtype: new FormControl('', [Validators.required]),
      cardname: new FormControl('', [Validators.required]),
      cardnumber: new FormControl('', [Validators.required,Validators.minLength(16)]),
      cvv: new FormControl('', [Validators.required,Validators.minLength(3)]),
      expmonth: new FormControl('', [Validators.required]),
      expyear: new FormControl('', [Validators.required]),
      zipcode: new FormControl('', [Validators.required,Validators.minLength(6)])
    })
  });
  onSubmit() {
    console.log(this.bookingForm.value);
    this.bookingForm.reset();
  }
}
import { Component, OnInit } from '@angular/core';
import { ContactHelperService } from 'src/app/components/helper/contact/contact-helper.service';
import { Contact } from '../../../models/contact/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {

  model = new Contact;
  submitted = false; 
  error: {} | undefined; 
  constructor(private contactService: ContactHelperService) { }
  onSubmit() {
    this.submitted = true; 
    return this.contactService.contactForm(this.model).subscribe(
      data => this.model = data,
      error => this.error = error
    );
  };
  resolved(captchaResponse: string | any) {
      console.log(`Resolved response token: ${captchaResponse}`);
  } 

  ngOnInit(): void {
  }

}

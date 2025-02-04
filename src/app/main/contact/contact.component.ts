import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SendmailService } from '../servicios/sendmail.service';
import { catchError, of, tap } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContacto: FormGroup;
  constructor(private mailService: SendmailService) {
    this.formContacto = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      subject: new FormControl('', [Validators.required]),
      message: new FormControl('', [Validators.required])
    });
  }

  ngOnInit(): void {
    
  }
  onSubmit(){
    if (this.formContacto.valid) {
      let form = {
        name: this.formContacto.get('name')?.value,
        email: this.formContacto.get('email')?.value,
        asunto: this.formContacto.get('subject')?.value,
        message: this.formContacto.get('message')?.value,
      }
      this.mailService.sendMail(form).subscribe((data: any) => {
          console.log('Email sent successfully', data);
          Swal.fire({
            title: "Done!",
            icon: "success",
            text: "Email sent successfully",
          });
          this.formContacto.reset();
        },
        (error: any) => {
          console.error('Error sending email', error);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
          });
        }
      );
    } else {
      this.formContacto.markAllAsTouched(); // Marca todos los campos como tocados para activar las validaciones
    }
  }
  
}

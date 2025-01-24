import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formContacto: FormGroup;
  constructor() {
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
      console.log(this.formContacto.value);
    } else {
      this.formContacto.markAllAsTouched(); // Marca todos los campos como tocados para activar las validaciones
    }
  }
  
}

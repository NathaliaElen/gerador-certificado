import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from "../../components/primary-button/primary-button.component";
import { FormsModule, NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certificado-form',
  imports: [
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './certificado-form.component.html',
  styleUrls: ['./certificado-form.component.css']
})
export class CertificadoFormComponent {
  nomeCompleto: string = '';
  atividade: string = '';
  atividades: string[] = ['Angular', 'React', 'Vue'];

  campoInvalido(control: NgModel) {
    return control.invalid &&
      control.touched &&
      control.errors?.['required'];
  }
}

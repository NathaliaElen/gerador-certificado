import { Component } from '@angular/core';
import { SecondaryButtonComponent } from '../../components/secondary-button/secondary-button.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-certificado',
  imports: [
    SecondaryButtonComponent,
    RouterLink
  ],
  templateUrl: './certificado.component.html',
  styleUrls: ['./certificado.component.css']
})
export class CertificadoComponent {

}

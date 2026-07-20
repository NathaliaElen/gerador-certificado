import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { ItemCertificadoComponent } from "./components/item-certificado/item-certificado.component";
import { BaseUiComponent } from "./components/base-ui/base-ui.component";
import { CertificadosComponent } from './pages/certificados/certificados.component';
import { CertificadoFormComponent } from './pages/certificado-form/certificado-form.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    NavbarComponent,
    BaseUiComponent,
    CertificadosComponent,
    CertificadoFormComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'gerador-certificado';

  exibeNavbar: boolean = true;
}

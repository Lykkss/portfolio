import { Component } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { ContactComponent } from './pages/contact/contact.component';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, ProjetsComponent, CompetencesComponent, PresentationComponent, ParcoursComponent, ContactComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'portfolio';
}

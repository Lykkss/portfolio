import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

// Importer les composants nécessaires
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProjetsComponent } from './pages/projets/projets.component';
import { CompetencesComponent } from './pages/competences/competences.component';
import { PresentationComponent } from './pages/presentation/presentation.component';
import { ParcoursComponent } from './pages/parcours/parcours.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AProposComponent} from './pages/a-propos/a-propos.component';

@Component({
  selector: 'app-root',
  imports: [
    HeaderComponent, 
    FooterComponent, 
    ProjetsComponent, 
    CompetencesComponent, 
    PresentationComponent, 
    ParcoursComponent, 
    ContactComponent, 
    AProposComponent , 
    RouterModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio';
}

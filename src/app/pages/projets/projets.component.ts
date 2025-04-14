import { Component } from '@angular/core';

@Component({
  selector: 'app-projets',
  templateUrl: './projets.component.html',
  styleUrls: ['./projets.component.scss']
})
export class ProjetsComponent {
  navigateToLiveEvent(): void {
    console.log("Redirection vers /details/live-event"); // Pour vérifier le clic
    window.location.href = '/details/live-event';
  }
}

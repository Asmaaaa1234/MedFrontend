import { Component } from '@angular/core';

/** Route : `/doctor/parametres` — menu : Settings */
@Component({
  selector: 'app-doctor-parametres',
  templateUrl: './doctor-parametres.component.html',
  standalone: false,
})
export class DoctorParametresComponent {
  settings = {
    language: 'fr',
    darkMode: false,
    emailNotifications: true,
    whatsappReminders: false,
  };
}

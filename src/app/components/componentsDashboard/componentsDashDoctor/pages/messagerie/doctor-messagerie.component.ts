import { Component } from '@angular/core';

/** Route : `/doctor/messagerie` — menu : Messaging */
@Component({
  selector: 'app-doctor-messagerie',
  templateUrl: './doctor-messagerie.component.html',
  standalone: false,
})
export class DoctorMessagerieComponent {
  threads = [
    { from: 'Patient John Smith', subject: 'Medication side effects', unread: true },
    { from: 'Secretary', subject: 'Agenda adjustment', unread: false },
  ];
}

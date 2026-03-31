import { Component } from '@angular/core';

/** Route : `/doctor/agenda` — menu : Calendar */
@Component({
  selector: 'app-doctor-agenda',
  templateUrl: './doctor-agenda.component.html',
  standalone: false,
})
export class DoctorAgendaComponent {
  selectedDate = '2026-03-31';
  slots = [
    { time: '09:00', patient: 'John Smith', room: 'Room 1' },
    { time: '10:00', patient: 'Emma Wilson', room: 'Room 2' },
    { time: '14:30', patient: 'Sarah Kim', room: 'Teleconsultation' },
  ];
}

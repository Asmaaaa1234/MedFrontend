import { Component } from '@angular/core';

/** Route : `/doctor/rendez-vous` — menu : Appointments */
@Component({
  selector: 'app-doctor-rendez-vous',
  templateUrl: './doctor-rendez-vous.component.html',
  standalone: false,
})
export class DoctorRendezVousComponent {
  appointments = [
    { id: 'A-101', patient: 'John Smith', type: 'Follow-up', time: '09:00', status: 'Pending' },
    { id: 'A-102', patient: 'Maria Garcia', type: 'Consultation', time: '10:30', status: 'Confirmed' },
    { id: 'A-103', patient: 'David Chen', type: 'Check-up', time: '14:00', status: 'Cancelled' },
  ];

  setStatus(id: string, status: 'Confirmed' | 'Cancelled'): void {
    this.appointments = this.appointments.map((item) => (item.id === id ? { ...item, status } : item));
  }
}

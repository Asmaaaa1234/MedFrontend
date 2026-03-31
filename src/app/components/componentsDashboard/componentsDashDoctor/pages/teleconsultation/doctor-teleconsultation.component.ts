import { Component } from '@angular/core';

/** Route : `/doctor/teleconsultation` — menu : Teleconsultation */
@Component({
  selector: 'app-doctor-teleconsultation',
  templateUrl: './doctor-teleconsultation.component.html',
  standalone: false,
})
export class DoctorTeleconsultationComponent {
  queue = [
    { patient: 'Sarah Kim', time: '11:15', reason: 'Follow-up diabetes' },
    { patient: 'Mike Ross', time: '16:00', reason: 'Lab results review' },
  ];
}

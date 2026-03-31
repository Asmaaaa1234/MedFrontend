import { Component } from '@angular/core';

/** Route : `/doctor/ordonnances` — menu : Prescriptions */
@Component({
  selector: 'app-doctor-ordonnances',
  templateUrl: './doctor-ordonnances.component.html',
  standalone: false,
})
export class DoctorOrdonnancesComponent {
  prescriptions = [
    { patient: 'John Smith', medication: 'Amlodipine 5mg', duration: '30 days' },
    { patient: 'Maria Garcia', medication: 'Metformin 500mg', duration: '90 days' },
  ];
}

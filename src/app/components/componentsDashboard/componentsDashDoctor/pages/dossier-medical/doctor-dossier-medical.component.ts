import { Component } from '@angular/core';

/** Route : `/doctor/dossier-medical` — menu : Medical records */
@Component({
  selector: 'app-doctor-dossier-medical',
  templateUrl: './doctor-dossier-medical.component.html',
  standalone: false,
})
export class DoctorDossierMedicalComponent {
  records = [
    { date: '2026-03-10', diagnosis: 'Hypertension', note: 'BP stable under treatment.' },
    { date: '2026-02-02', diagnosis: 'Type 2 diabetes', note: 'HbA1c follow-up requested.' },
  ];
}

import { Component } from '@angular/core';
import { Router } from '@angular/router';

/** Route : `/doctor/patients` — menu : Patients */
@Component({
  selector: 'app-doctor-patients',
  templateUrl: './doctor-patients.component.html',
  standalone: false,
})
export class DoctorPatientsComponent {
  search = '';
  patients = [
    { id: 'P-001', name: 'John Smith', phone: '+216 55 111 111', chronic: 'Hypertension' },
    { id: 'P-002', name: 'Maria Garcia', phone: '+216 55 222 222', chronic: 'Type 2 diabetes' },
    { id: 'P-003', name: 'David Chen', phone: '+216 55 333 333', chronic: 'Asthma' },
  ];

  constructor(private router: Router) {}

  get filteredPatients() {
    const term = this.search.toLowerCase().trim();
    if (!term) {
      return this.patients;
    }
    return this.patients.filter((p) => p.name.toLowerCase().includes(term) || p.id.toLowerCase().includes(term));
  }

  navigateTo(path: 'add' | 'edit' | 'create-record'): void {
    this.router.navigate(['/doctor', 'patients', path]);
  }
}

import { Component } from '@angular/core';

/** Route : `/doctor/facturation` — menu : Billing */
@Component({
  selector: 'app-doctor-facturation',
  templateUrl: './doctor-facturation.component.html',
  standalone: false,
})
export class DoctorFacturationComponent {
  invoices = [
    { no: 'INV-2026-001', patient: 'John Smith', amount: 120, status: 'Paid' },
    { no: 'INV-2026-002', patient: 'Emma Wilson', amount: 95, status: 'Pending' },
  ];
}

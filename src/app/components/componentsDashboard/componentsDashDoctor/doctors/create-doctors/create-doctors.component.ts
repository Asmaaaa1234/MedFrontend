import { Component } from '@angular/core';
import { Router } from '@angular/router';

export type AgendaStatus = 'Confirmed' | 'Pending' | 'Cancelled';

export type StatNavKey = 'appointments' | 'patients' | 'revenue' | 'satisfaction';

export interface AgendaItem {
  id: string;
  patientId: string;
  time: string;
  patientName: string;
  type: string;
  status: AgendaStatus;
}

export interface RecentPatient {
  id: string;
  initials: string;
  name: string;
  condition: string;
  avatarClass: string;
}

interface PerformanceMetric {
  consultations: string;
  revenus: string;
  dossiers: string;
  noShow: string;
}

@Component({
  selector: 'app-create-doctors',
  standalone: false,
  templateUrl: './create-doctors.component.html',
  styleUrl: './create-doctors.component.scss',
})
export class CreateDoctorsComponent {
  constructor(private router: Router) {}

  readonly statCards: Array<{
    navKey: StatNavKey;
    title: string;
    value: string;
    trend: string;
    trendLabel: string;
    icon: string;
    iconWrapClass: string;
    iconColorClass: string;
  }> = [
    {
      navKey: 'appointments',
      title: "Today's Appointments",
      value: '24',
      trend: '+12%',
      trendLabel: 'vs last week',
      icon: 'ri-calendar-check-line',
      iconWrapClass: 'doctor-stat-icon-wrap--blue',
      iconColorClass: 'doctor-stat-icon--blue',
    },
    {
      navKey: 'patients',
      title: 'Total Patients',
      value: '1,248',
      trend: '+5%',
      trendLabel: 'vs last week',
      icon: 'ri-team-line',
      iconWrapClass: 'doctor-stat-icon-wrap--teal',
      iconColorClass: 'doctor-stat-icon--teal',
    },
    {
      navKey: 'revenue',
      title: 'Revenue',
      value: '$48,920',
      trend: '+8%',
      trendLabel: 'vs last month',
      icon: 'ri-money-dollar-circle-line',
      iconWrapClass: 'doctor-stat-icon-wrap--amber',
      iconColorClass: 'doctor-stat-icon--amber',
    },
    {
      navKey: 'satisfaction',
      title: 'Satisfaction',
      value: '4.9/5',
      trend: '+0.2',
      trendLabel: 'vs last month',
      icon: 'ri-emotion-happy-line',
      iconWrapClass: 'doctor-stat-icon-wrap--violet',
      iconColorClass: 'doctor-stat-icon--violet',
    },
  ];

  readonly agendaItems: AgendaItem[] = [
    {
      id: 'apt-1',
      patientId: 'pat-1',
      time: '09:00 AM',
      patientName: 'John Smith',
      type: 'Follow-up',
      status: 'Confirmed',
    },
    {
      id: 'apt-2',
      patientId: 'pat-2',
      time: '10:30 AM',
      patientName: 'Maria Garcia',
      type: 'Consultation',
      status: 'Pending',
    },
    {
      id: 'apt-3',
      patientId: 'pat-3',
      time: '02:00 PM',
      patientName: 'David Chen',
      type: 'Check-up',
      status: 'Cancelled',
    },
    {
      id: 'apt-4',
      patientId: 'pat-4',
      time: '03:30 PM',
      patientName: 'Emma Wilson',
      type: 'Follow-up',
      status: 'Confirmed',
    },
    {
      id: 'apt-5',
      patientId: 'pat-5',
      time: '04:45 PM',
      patientName: 'James Brown',
      type: 'Consultation',
      status: 'Pending',
    },
  ];

  readonly recentPatients: RecentPatient[] = [
    {
      id: 'rp-1',
      initials: 'JD',
      name: 'John Doe',
      condition: 'Hypertension',
      avatarClass: 'doctor-avatar--blue',
    },
    {
      id: 'rp-2',
      initials: 'SK',
      name: 'Sarah Kim',
      condition: 'Type 2 Diabetes',
      avatarClass: 'doctor-avatar--teal',
    },
    {
      id: 'rp-3',
      initials: 'MR',
      name: 'Mike Ross',
      condition: 'Annual physical',
      avatarClass: 'doctor-avatar--amber',
    },
    {
      id: 'rp-4',
      initials: 'LW',
      name: 'Lisa Wong',
      condition: 'Post-op follow-up',
      avatarClass: 'doctor-avatar--rose',
    },
  ];

  readonly activities = [
    { title: 'Consultation completed: John Smith', time: '10:14 Today' },
    { title: 'Medical file updated: Sarah Kim', time: '09:47 Today' },
    { title: 'Invoice payment received #INV-2026-002', time: 'Yesterday 18:20' },
    { title: 'Reminder sent: Emma Wilson', time: 'Yesterday 16:05' },
  ];

  readonly categories = [
    { name: 'General medicine', count: '(1,294)' },
    { name: 'Cardiology', count: '(826)' },
    { name: 'Pediatrics', count: '(479)' },
    { name: 'Dermatology', count: '(275)' },
    { name: 'Neurology', count: '(150)' },
  ];

  readonly reviewStats = [
    { star: 5, percent: 50, count: 2758 },
    { star: 4, percent: 29, count: 1063 },
    { star: 3, percent: 18, count: 997 },
    { star: 2, percent: 5, count: 227 },
    { star: 1, percent: 8, count: 408 },
  ];

  selectedPeriod: 'ALL' | '1M' | '6M' | '1Y' = '1Y';
  readonly periods: Array<'ALL' | '1M' | '6M' | '1Y'> = ['ALL', '1M', '6M', '1Y'];
  readonly summaryByPeriod: Record<'ALL' | '1M' | '6M' | '1Y', PerformanceMetric> = {
    ALL: { consultations: '3,251', revenus: '$10.45k', dossiers: '152', noShow: '14.12%' },
    '1M': { consultations: '265', revenus: '$1.82k', dossiers: '34', noShow: '10.08%' },
    '6M': { consultations: '1,986', revenus: '$8.11k', dossiers: '111', noShow: '13.74%' },
    '1Y': { consultations: '7,585', revenus: '$22.89k', dossiers: '367', noShow: '18.92%' },
  };

  setPeriod(period: 'ALL' | '1M' | '6M' | '1Y'): void {
    this.selectedPeriod = period;
  }

  get currentMetrics(): PerformanceMetric {
    return this.summaryByPeriod[this.selectedPeriod];
  }

  /** Doctor area: `/doctor/rendez-vous` */
  navigateStat(key: StatNavKey): void {
    switch (key) {
      case 'appointments':
        this.router.navigate(['/doctor', 'rendez-vous']);
        break;
      case 'patients':
        this.router.navigate(['/doctor', 'patients']);
        break;
      case 'revenue':
        this.router.navigate(['/doctor', 'facturation']);
        break;
      case 'satisfaction':
        this.router.navigate(['/doctor', 'reclamations', 'view', '1']);
        break;
    }
  }

  /** No `/doctor/.../appointments/:id` route in project — intentional no-op */
  onAgendaRowClick(_item: AgendaItem): void {}

  /** No `/doctor/patients/:id` route — intentional no-op */
  onAgendaPatientNameClick(event: Event, _item: AgendaItem): void {
    event.stopPropagation();
  }

  navigateWeekView(): void {
    this.router.navigate(['/doctor', 'agenda']);
  }

  navigateAddAppointment(): void {
    this.router.navigate(['/doctor', 'agenda']);
  }

  navigateAiAssistance(): void {
    this.router.navigate(['/doctor', 'ia-assistance']);
  }

  /** No `/doctor/patients/:id` — intentional no-op */
  onRecentPatientClick(_p: RecentPatient): void {}

  navigateTeleconsultation(): void {
    this.router.navigate(['/doctor', 'teleconsultation']);
  }

  navigateRendezVous(): void {
    this.router.navigate(['/doctor', 'rendez-vous']);
  }

  /** No dedicated "more" route */
  onAgendaMoreClick(event: Event): void {
    event.stopPropagation();
  }
}

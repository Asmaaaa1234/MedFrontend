import { Component } from '@angular/core';

export interface AppointmentRow {
  doctor: string;
  avatar: string;
  date: string;
  email: string;
  status: 'Active' | 'Pending';
  price: string;
}

@Component({
  selector: 'app-create-doctors',
  standalone: false,
  templateUrl: './create-doctors.component.html',
  styleUrl: './create-doctors.component.scss',
})
export class CreateDoctorsComponent {
  readonly statCards = [
    {
      title: 'Total Patient',
      value: '24,839',
      delta: '+7.8% then last week',
      variant: 'primary' as const,
      icon: 'ri-group-line',
      iconBg: 'bg-white bg-opacity-25',
    },
    {
      title: 'Total Report',
      value: '245',
      delta: '+7.8% then last week',
      variant: 'light' as const,
      icon: 'ri-file-list-3-line',
      iconBg: 'bg-warning-subtle text-warning',
    },
    {
      title: 'Total Earning',
      value: '92,372',
      delta: '+7.8% then last week',
      variant: 'light' as const,
      icon: 'ri-money-dollar-circle-line',
      iconBg: 'bg-danger-subtle text-danger',
    },
    {
      title: 'Total Appointment',
      value: '879',
      delta: '+7.8% then last week',
      variant: 'light' as const,
      icon: 'ri-calendar-event-line',
      iconBg: 'bg-primary-subtle text-primary',
    },
  ];

  appointments: AppointmentRow[] = [
    {
      doctor: 'Dr. Sarah Johnson',
      avatar: 'assets/images/users/avatar-2.jpg',
      date: 'Mar 28, 2026',
      email: 'sarah.j@clinic.com',
      status: 'Active',
      price: '$120',
    },
    {
      doctor: 'Dr. Michael Lee',
      avatar: 'assets/images/users/avatar-3.jpg',
      date: 'Mar 27, 2026',
      email: 'm.lee@clinic.com',
      status: 'Pending',
      price: '$85',
    },
    {
      doctor: 'Dr. Emma Wilson',
      avatar: 'assets/images/users/avatar-5.jpg',
      date: 'Mar 26, 2026',
      email: 'e.wilson@clinic.com',
      status: 'Active',
      price: '$200',
    },
  ];

  // Apex line chart config (ng-apexcharts)
  patientStatsChart: any = {
    series: [
      {
        name: 'Patient statistics',
        data: [42000, 55000, 78000, 120000, 95000, 140000, 82873],
      },
    ],
    chart: {
      type: 'line',
      height: 320,
      toolbar: { show: false },
      zoom: { enabled: false },
      fontFamily: 'inherit',
    },
    colors: ['#405189'],
    stroke: {
      curve: 'smooth',
      width: 3,
    },
    dataLabels: { enabled: false },
    grid: {
      borderColor: '#eef0f7',
      strokeDashArray: 4,
      padding: { left: 8, right: 8 },
    },
    xaxis: {
      categories: ['Sat', 'Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
      axisBorder: { show: false },
      axisTicks: { show: false },
      labels: { style: { colors: '#878a99' } },
    },
    yaxis: {
      min: 0,
      max: 200000,
      tickAmount: 5,
      labels: {
        style: { colors: '#878a99' },
        formatter: (val: number) => {
          if (val >= 1000) {
            return `${Math.round(val / 1000)}K`;
          }
          return `${val}`;
        },
      },
    },
    tooltip: {
      y: {
        formatter: (val: number) => `$${val.toLocaleString()}`,
      },
    },
  };
}

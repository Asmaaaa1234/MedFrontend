import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'DOCTOR AREA',
    isTitle: true
  },
  {
    id: 2,
    label: 'Doctor dashboard',
    icon: 'ri-dashboard-2-line',
    link: '/doctor/doctors/create'
  },
  {
    id: 3,
    label: 'Medical practice',
    icon: 'ri-stethoscope-line',
    collapseid: 'doctor-medical-practice',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'Add doctor',
        link: '/doctor/doctors/add',
        parentId: 3
      },
      {
        id: 5,
        label: 'Edit doctor',
        link: '/doctor/doctors/edit/1',
        parentId: 3
      },
      {
        id: 6,
        label: 'Create doctor record',
        link: '/doctor/doctors/create',
        parentId: 3
      },
      {
        id: 7,
        label: 'Patients',
        link: '/doctor/patients',
        parentId: 3
      },
      {
        id: 8,
        label: 'Appointments',
        link: '/doctor/rendez-vous',
        parentId: 3
      },
      {
        id: 9,
        label: 'Calendar',
        link: '/doctor/agenda',
        parentId: 3
      },
      {
        id: 10,
        label: 'Medical records',
        link: '/doctor/dossier-medical',
        parentId: 3
      },
      {
        id: 11,
        label: 'Prescriptions',
        link: '/doctor/ordonnances',
        parentId: 3
      }
    ]
  },
  {
    id: 12,
    label: 'Communication & follow-up',
    icon: 'ri-message-2-line',
    collapseid: 'doctor-communication',
    isCollapsed: true,
    subItems: [
      {
        id: 13,
        label: 'Teleconsultation',
        link: '/doctor/teleconsultation',
        parentId: 12
      },
      {
        id: 14,
        label: 'Messaging',
        link: '/doctor/messagerie',
        parentId: 12
      },
      {
        id: 15,
        label: 'Documents',
        link: '/doctor/documents',
        parentId: 12
      },
      {
        id: 16,
        label: 'Chronic care',
        link: '/doctor/suivi-chronique',
        parentId: 12
      },
      {
        id: 17,
        label: 'New complaint',
        link: '/doctor/reclamations/add',
        parentId: 12
      },
      {
        id: 18,
        label: 'Complaint tracking',
        link: '/doctor/reclamations/view/1',
        parentId: 12
      }
    ]
  },
  {
    id: 19,
    label: 'Analytics & settings',
    icon: 'ri-line-chart-line',
    collapseid: 'doctor-analytics',
    isCollapsed: true,
    subItems: [
      {
        id: 20,
        label: 'AI assistance',
        link: '/doctor/ia-assistance',
        parentId: 19
      },
      {
        id: 21,
        label: 'AI scheduling',
        link: '/doctor/ia-planning',
        parentId: 19
      },
      {
        id: 22,
        label: 'Reporting',
        link: '/doctor/reporting',
        parentId: 19
      },
      {
        id: 23,
        label: 'Billing',
        link: '/doctor/facturation',
        parentId: 19
      },
      {
        id: 24,
        label: 'Settings',
        link: '/doctor/parametres',
        parentId: 19
      }
    ]
  }
];

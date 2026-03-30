import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'ESPACE PATIENT',
    isTitle: true
  },
  {
    id: 2,
    label: 'Tableau de bord patient',
    icon: 'ri-dashboard-2-line',
    link: '/patient/patients/add'
  },
  {
    id: 3,
    label: 'Mon profil',
    icon: 'ri-user-heart-line',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'Informations personnelles',
        link: '/patient/patients/add',
        parentId: 3
      },
      {
        id: 5,
        label: 'Contacts urgence',
        link: '/patient/patients/add',
        parentId: 3
      },
      {
        id: 6,
        label: 'Consentement medical',
        link: '/patient/consentement',
        parentId: 3
      }
    ]
  },
  {
    id: 7,
    label: 'Rendez-vous',
    icon: 'ri-calendar-check-line',
    isCollapsed: true,
    subItems: [
      {
        id: 8,
        label: 'Prendre un rendez-vous',
        link: '/patient/rendez-vous',
        parentId: 7
      },
      {
        id: 9,
        label: 'Historique des rendez-vous',
        link: '/patient/rendez-vous',
        parentId: 7
      },
      {
        id: 10,
        label: 'Notifications de rappel',
        link: '/patient/notifications',
        parentId: 7
      }
    ]
  },
  {
    id: 11,
    label: 'Dossier medical',
    icon: 'ri-file-medical-line',
    isCollapsed: true,
    subItems: [
      {
        id: 12,
        label: 'Consultations et analyses',
        link: '/patient/dossier-medical',
        parentId: 11
      },
      {
        id: 13,
        label: 'Documents medicaux',
        link: '/patient/documents',
        parentId: 11
      },
      {
        id: 14,
        label: 'Suivi sante',
        link: '/patient/suivi-sante',
        parentId: 11
      }
    ]
  },
  {
    id: 15,
    label: 'Communication',
    icon: 'ri-message-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 16,
        label: 'Teleconsultation',
        link: '/patient/teleconsultation',
        parentId: 15
      },
      {
        id: 17,
        label: 'Messagerie',
        link: '/patient/messagerie',
        parentId: 15
      }
    ]
  },
  {
    id: 18,
    label: 'Facturation',
    icon: 'ri-bank-card-line',
    isCollapsed: true,
    subItems: [
      {
        id: 19,
        label: 'Mes factures',
        link: '/patient/factures',
        parentId: 18
      },
      {
        id: 20,
        label: 'Paiements',
        link: '/patient/paiements',
        parentId: 18
      }
    ]
  },
  {
    id: 21,
    label: 'Assistant IA',
    icon: 'ri-robot-2-line',
    link: '/patient/ia-assistant'
  },
  {
    id: 22,
    label: 'Parametres',
    icon: 'ri-settings-3-line',
    link: '/patient/parametres'
  }
];

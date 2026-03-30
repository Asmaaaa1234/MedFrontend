import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'CABINET MEDICAL',
    isTitle: true
  },
  {
    id: 2,
    label: 'Tableau de bord global',
    icon: 'ri-dashboard-2-line',
    link: '/admin/reclamations/view/1'
  },
  {
    id: 3,
    label: 'Gestion du cabinet',
    icon: 'ri-hospital-line',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'Patients',
        link: '/admin/patients',
        parentId: 3
      },
      {
        id: 5,
        label: 'Medecins',
        link: '/admin/medecins',
        parentId: 3
      },
      {
        id: 6,
        label: 'Personnel',
        link: '/admin/personnel',
        parentId: 3
      },
      {
        id: 7,
        label: 'Rendez-vous',
        link: '/admin/rendez-vous',
        parentId: 3
      },
      {
        id: 8,
        label: 'Dossier medical',
        link: '/admin/dossier-medical',
        parentId: 3
      },
      {
        id: 9,
        label: 'Documents medicaux',
        link: '/admin/documents',
        parentId: 3
      }
    ]
  },
  {
    id: 10,
    label: 'Facturation et paiements',
    icon: 'ri-bank-card-line',
    isCollapsed: true,
    subItems: [
      {
        id: 11,
        label: 'Facturation',
        link: '/admin/facturation',
        parentId: 10
      },
      {
        id: 12,
        label: 'Paiements',
        link: '/admin/paiements',
        parentId: 10
      }
    ]
  },
  {
    id: 13,
    label: 'Communication',
    icon: 'ri-message-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 14,
        label: 'Messagerie',
        link: '/admin/messagerie',
        parentId: 13
      },
      {
        id: 15,
        label: 'Teleconsultation',
        link: '/admin/teleconsultation',
        parentId: 13
      },
      {
        id: 16,
        label: 'Reclamations',
        link: '/admin/reclamations/view/1',
        parentId: 13
      }
    ]
  },
  {
    id: 17,
    label: 'IA et reporting',
    icon: 'ri-bar-chart-box-line',
    isCollapsed: true,
    subItems: [
      {
        id: 18,
        label: 'IA assistance',
        link: '/admin/ia-assistance',
        parentId: 17
      },
      {
        id: 19,
        label: 'IA OCR documents',
        link: '/admin/ia-ocr',
        parentId: 17
      },
      {
        id: 20,
        label: 'Reporting BI',
        link: '/admin/reporting',
        parentId: 17
      }
    ]
  },
  {
    id: 21,
    label: 'Securite et parametres',
    icon: 'ri-shield-keyhole-line',
    isCollapsed: true,
    subItems: [
      {
        id: 22,
        label: 'Securite',
        link: '/admin/securite',
        parentId: 21
      },
      {
        id: 23,
        label: 'Audit et logs',
        link: '/admin/audit',
        parentId: 21
      },
      {
        id: 24,
        label: 'Parametres',
        link: '/admin/parametres',
        parentId: 21
      }
    ]
  }
];

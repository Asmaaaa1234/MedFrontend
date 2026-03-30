import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'ESPACE SECRETAIRE',
    isTitle: true
  },
  {
    id: 2,
    label: 'Tableau de bord secretaire',
    icon: 'ri-dashboard-2-line',
    link: '/secretary/reclamations/view/1'
  },
  {
    id: 3,
    label: 'Accueil et patients',
    icon: 'ri-team-line',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'Accueil patients',
        link: '/secretary/patients',
        parentId: 3
      },
      {
        id: 5,
        label: 'Dossiers',
        link: '/secretary/dossiers',
        parentId: 3
      },
      {
        id: 6,
        label: 'Documents',
        link: '/secretary/documents',
        parentId: 3
      }
    ]
  },
  {
    id: 7,
    label: 'Rendez-vous et agenda',
    icon: 'ri-calendar-check-line',
    isCollapsed: true,
    subItems: [
      {
        id: 8,
        label: 'Planifier rendez-vous',
        link: '/secretary/rendez-vous',
        parentId: 7
      },
      {
        id: 9,
        label: 'Agenda',
        link: '/secretary/agenda',
        parentId: 7
      },
      {
        id: 10,
        label: 'Notifications',
        link: '/secretary/notifications',
        parentId: 7
      }
    ]
  },
  {
    id: 11,
    label: 'Reclamations patients',
    icon: 'ri-file-list-3-line',
    isCollapsed: true,
    subItems: [
      {
        id: 12,
        label: 'Ajouter',
        link: '/secretary/reclamations/add',
        parentId: 11
      },
      {
        id: 13,
        label: 'Modifier',
        link: '/secretary/reclamations/edit/1',
        parentId: 11
      },
      {
        id: 14,
        label: 'Consulter',
        link: '/secretary/reclamations/view/1',
        parentId: 11
      }
    ]
  },
  {
    id: 15,
    label: 'Facturation',
    icon: 'ri-bank-card-line',
    isCollapsed: true,
    subItems: [
      {
        id: 16,
        label: 'Facturation',
        link: '/secretary/facturation',
        parentId: 15
      },
      {
        id: 17,
        label: 'Paiements',
        link: '/secretary/paiements',
        parentId: 15
      }
    ]
  },
  {
    id: 18,
    label: 'Support et parametres',
    icon: 'ri-settings-3-line',
    isCollapsed: true,
    subItems: [
      {
        id: 19,
        label: 'Support',
        link: '/secretary/support',
        parentId: 18
      },
      {
        id: 20,
        label: 'Parametres',
        link: '/secretary/parametres',
        parentId: 18
      }
    ]
  }
];

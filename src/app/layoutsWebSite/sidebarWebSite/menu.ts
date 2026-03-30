import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'SITE PATIENT',
    isTitle: true
  },
  {
    id: 2,
    label: 'Accueil site',
    icon: 'ri-home-4-line',
    link: '/website/reclamations/view/1'
  },
  {
    id: 3,
    label: 'Prendre rendez-vous',
    icon: 'ri-calendar-check-line',
    isCollapsed: true,
    subItems: [
      {
        id: 4,
        label: 'Recherche medecin',
        link: '/website/medecins',
        parentId: 3
      },
      {
        id: 5,
        label: 'Specialites',
        link: '/website/specialites',
        parentId: 3
      },
      {
        id: 6,
        label: 'Demande de rendez-vous',
        link: '/website/prendre-rendez-vous',
        parentId: 3
      },
      {
        id: 7,
        label: 'Suivi rendez-vous',
        link: '/website/suivi-rendez-vous',
        parentId: 3
      }
    ]
  },
  {
    id: 8,
    label: 'Contact et support',
    icon: 'ri-customer-service-2-line',
    isCollapsed: true,
    subItems: [
      {
        id: 9,
        label: 'Nouvelle demande',
        link: '/website/reclamations/add',
        parentId: 8
      },
      {
        id: 10,
        label: 'Suivi demande',
        link: '/website/reclamations/view/1',
        parentId: 8
      },
      {
        id: 11,
        label: 'Contact',
        link: '/website/contact',
        parentId: 8
      },
      {
        id: 12,
        label: 'FAQ',
        link: '/website/faq',
        parentId: 8
      },
      {
        id: 13,
        label: 'Support',
        link: '/website/support',
        parentId: 8
      }
    ]
  },
  {
    id: 14,
    label: 'Options du site',
    icon: 'ri-global-line',
    link: '/website/multilingue'
  }
];

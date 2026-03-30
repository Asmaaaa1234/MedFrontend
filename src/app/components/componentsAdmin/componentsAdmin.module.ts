import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  NgbToastModule, NgbProgressbarModule
} from '@ng-bootstrap/ng-bootstrap';

import { FlatpickrModule } from 'angularx-flatpickr';
import { CountUpModule } from 'ngx-countup';
import { NgApexchartsModule } from 'ng-apexcharts';
import { LeafletModule } from '@bluehalo/ngx-leaflet';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import { SimplebarAngularModule } from 'simplebar-angular';

// Swiper Slider
import { SlickCarouselModule } from 'ngx-slick-carousel';

import { LightboxModule } from 'ngx-lightbox';

// Load Icons
import { defineElement } from "@lordicon/element";
import lottie from 'lottie-web';
import { RouterModule, Routes } from '@angular/router';

// Pages Routing
// import { PagesRoutingModule } from "./pages-routing.module";
 const routes: Routes = [
  {
        path: '',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'patients',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'medecins',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'personnel',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'rendez-vous',
        redirectTo: 'reclamations/add',
        pathMatch: 'full'
  },
  {
        path: 'dossier-medical',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'facturation',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'paiements',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'teleconsultation',
        redirectTo: 'reclamations/add',
        pathMatch: 'full'
  },
  {
        path: 'messagerie',
        redirectTo: 'reclamations/add',
        pathMatch: 'full'
  },
  {
        path: 'documents',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'ia-assistance',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'ia-ocr',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'reporting',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'securite',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'audit',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'parametres',
        redirectTo: 'reclamations/view/1',
        pathMatch: 'full'
  },
  {
        path: 'reclamations',
        //component: AdduserComponent,
        loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule),
  },
 ]


@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbToastModule,
    NgbProgressbarModule,
    FlatpickrModule.forRoot(),
    RouterModule.forChild(routes),
    CountUpModule,
    NgApexchartsModule,
    LeafletModule,
    NgbDropdownModule,
    SimplebarAngularModule,
    SlickCarouselModule,
    LightboxModule,
    
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsAdminModule {
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
import { Component, OnInit } from '@angular/core';
import { EventService } from '../core/services/event.service';
import { TranslateService } from '@ngx-translate/core';
import { CookieService } from 'ngx-cookie-service';
// Store
import { RootReducerState } from '../store';
import { Store } from '@ngrx/store';

@Component({
    selector: 'app-layout-patient',
    templateUrl: './layoutPatient.component.html',
    styleUrls: ['./layoutPatient.component.scss'],
    standalone: false
})

/**
 * Layout Component
 */
export class LayoutPatientComponent implements OnInit {

  layoutType!: string;
   

  constructor(private store: Store<RootReducerState>, private translateService:TranslateService) { }

  ngOnInit(): void {
    this.store.select('layout').subscribe((data) => {
      // Keep patient dashboard in horizontal mode as requested.
      this.layoutType = 'horizontal';
      document.documentElement.setAttribute('data-layout', 'horizontal');
      document.body.setAttribute('data-layout', 'horizontal');
      document.documentElement.setAttribute('data-bs-theme', data.LAYOUT_MODE);
      document.documentElement.setAttribute('data-layout-width', data.LAYOUT_WIDTH);
      document.documentElement.setAttribute('data-layout-position', data.LAYOUT_POSITION);
      document.documentElement.setAttribute('data-topbar', 'light');
      document.documentElement.setAttribute('data-preloader', data.DATA_PRELOADER)
      document.documentElement.setAttribute('data-sidebar-visibility', data.SIDEBAR_VISIBILITY);
    })

    // ✅ اللغة الافتراضية
    this.translateService.setDefaultLang('fr');
    this.translateService.use('fr');

      //this.cookieValue = 'fr'; // مهم لتمييز العنصر active
      }


  /**
  * Check if the vertical layout is requested
  */
  isVerticalLayoutRequested() {
    return this.layoutType === 'vertical';
  }

  /**
   * Check if the semibox layout is requested
   */
  isSemiboxLayoutRequested() {
    return this.layoutType === 'semibox';
  }

  /**
   * Check if the horizontal layout is requested
   */
  isHorizontalLayoutRequested() {
    return this.layoutType === 'horizontal';
  }

  /**
   * Check if the horizontal layout is requested
   */
  isTwoColumnLayoutRequested() {
    return this.layoutType === 'twocolumn';
  }

}

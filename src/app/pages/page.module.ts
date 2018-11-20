import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard/dashboard.component';
import { PrigressComponent } from './prigress/prigress.component';
import { Grafics1Component } from './grafics1/grafics1.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        PrigressComponent,
        Grafics1Component
    ],
    exports: [
        DashboardComponent,
        PrigressComponent,
        Grafics1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES
    ]
})
// tslint:disable-next-line:eofline
export class PageModule { }
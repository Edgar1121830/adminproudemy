import { Route, Routes, RouterModule } from '@angular/router';


import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PrigressComponent } from './prigress/prigress.component';
import { Grafics1Component } from './grafics1/grafics1.component';



const pagesRoutes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            { path: 'dashboard', component: DashboardComponent},
            { path: 'prigress', component: PrigressComponent},
            { path: 'grafics1', component: Grafics1Component},
            { path: '', redirectTo: './dashboard', pathMatch: 'full' }
        ]
    }
];

export const PAGES_ROUTES = RouterModule.forChild( pagesRoutes );

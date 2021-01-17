import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {LayoutComponent} from './layout.component';
import {Screen2Component} from './screen2/screen2.component';
import {AbsenteismeComponent} from "./absenteisme/absenteisme.component";
import {EmploiScreenComponent} from "./emploi-screen/emploi-screen.component";
import {NoteAbsenceComponent} from "./note-absence/note-absence.component";

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            {
                path: '',
                redirectTo: 'dashboard'
            },
            {
                path: 'dashboard',
                loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
            },
            {
                path: 'screen1',
                loadChildren: () => import('./screen1/screen1.module').then(m => m.Screen1Module)
            },
            {
                path: 'screen2',
                component: Screen2Component
            },
            {
                path: 'emploi',
                component: EmploiScreenComponent
            },
            {
                path: 'Absenteisme',
                component: AbsenteismeComponent
            },
            {
                path: 'note/:idclasse/:idSeance',
                component:NoteAbsenceComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class LayoutRoutingModule {}

import { Routes } from '@angular/router';
import { NavigationComponent } from './navigation/navigation.component';

export const routes: Routes = [
    {
        path: 'panel',
        component: NavigationComponent,
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'panel',
    }
];

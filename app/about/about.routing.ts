import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';

const aboutRoutes: Routes = [
  {
    path: 'about',
    component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent
      },
      {
        path: ':username',
        component: AboutUserComponent
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
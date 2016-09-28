import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { AboutUserComponent } from './about-user.component';
import { AboutSectionComponent } from './about-section.component';
import { AboutUsersResolve } from './about-resolve.service';
import { AboutUserResolve } from './about-user-resolve.service';

const aboutRoutes: Routes = [
  {
    path: '',
    component: AboutSectionComponent,
    children: [
      {
        path: '',
        component: AboutComponent,
        resolve: {
          users: AboutUsersResolve
        }
      },
      {
        path: ':username',
        component: AboutUserComponent,
        resolve: {
          user: AboutUserResolve
        }
      }
    ]
  }
];

export const aboutRouting: ModuleWithProviders = RouterModule.forChild(aboutRoutes);
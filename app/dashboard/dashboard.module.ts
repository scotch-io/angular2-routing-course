import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard.component';
import { dashboardRouting } from './dashboard.routing';
import { DashboardUsersComponent } from './users/dashboard-users.component';
import { DashboardUsersHomeComponent } from './users/dashboard-users-home.component';
import { DashboardUserDetailsComponent } from './users/dashboard-user-details.component';
import { UserService } from '../shared/services/user.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    dashboardRouting
  ],
  declarations: [
    DashboardComponent,
    DashboardUsersComponent,
    DashboardUsersHomeComponent,
    DashboardUserDetailsComponent
  ],
  providers: [
    UserService
  ]
})
export class DashboardModule {}
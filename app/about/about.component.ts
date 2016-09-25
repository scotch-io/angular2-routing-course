import { Component, OnInit } from '@angular/core';
import { User } from '../shared/models/user';
import { UserService } from '../shared/services/user.service';

@Component({
  selector: 'about-page',
  styles: [`
    .profile-card   {
      background: #f3f3f3;
      border-radius: 4px;
      padding: 30px;
      text-align: center;
    }
    .profile-card img  {
      max-width: 50%;
      margin: 15px auto;
    }
  `],
  template: `
    <div class="row" *ngIf="users">
  
      <div class="col-sm-4" *ngFor="let user of users">

        <div class="profile-card" [routerLink]="['/about', user.username]">
          <img [src]="user.avatar" class="img-responsive img-circle">

          <h2>{{ user.name }}</h2>
          
          <p><a href="https://twitter.com/{{ user.username }}">
            {{ user.username }}
          </a></p>
        </div>

      </div>

    </div>
  `
})
export class AboutComponent implements OnInit {
  users: User[];

  constructor(private service: UserService) {}

  ngOnInit() {
    this.service.getUsers().then(users => this.users = users);
  }

}
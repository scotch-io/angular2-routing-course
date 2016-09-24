import { Component } from '@angular/core';

export class User {
  id: number;
  name: string;
  username: string;
  avatar: string;
}

const users: User[] = [
  {
    id: 1,
    name: 'Chris',
    username: 'sevilayha',
    avatar: 'https://pbs.twimg.com/profile_images/422816823302561793/Hg3LD8K7_400x400.jpeg'
  },
  {
    id: 2,
    name: 'Nick',
    username: 'whatnicktweets',
    avatar: 'https://pbs.twimg.com/profile_images/502500686588690432/wXBzuCBj_400x400.jpeg'
  },
  {
    id: 3,
    name: 'Holly',
    username: 'hollylawly',
    avatar: 'https://pbs.twimg.com/profile_images/721918869821005824/2qT_RY5M_400x400.jpg'
  }
]

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
        <div class="profile-card">
          <img [src]="user.avatar" class="img-responsive img-circle">

          <h2>{{ user.name }}</h2>
          <p><a href="#">{{ user.username }}</a></p>
        </div>
      </div>

    </div>
  `
})
export class AboutComponent {
  users: User[] = users;
}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

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
  styles: [`
    img     {
      max-width: 300px;
      margin: 20px auto;
    }
  `],
  template: `
    <div class="jumbotron text-center" *ngIf="user">
      <h1>{{ user.name }} ({{ user.username }})</h1>

      <img [src]="user.avatar" class="img-responsive img-circle">
    </div>
  `
})
export class AboutUserComponent implements OnInit {
  user;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    // grab the current username
    let username = this.route.snapshot.params['username'];

    this.user = users.find(function(user) {
      return user.username === username;
    });
  }

}
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../shared/models/user';

@Component({
  styles: [`
    img     {
      max-width: 300px;
      margin: 20px auto;
    }
  `],
  template: `
    <a (click)="goBack()" class="btn btn-sm btn-info">Go Back</a>
    <div class="jumbotron text-center" *ngIf="user">
      <h1>{{ user.name }} ({{ user.username }})</h1>

      <img [src]="user.avatar" class="img-responsive img-circle">
    </div>
  `
})
export class AboutUserComponent implements OnInit {
  user: User;

  constructor(
    private route: ActivatedRoute, 
    private router: Router
  ) {}

  ngOnInit() {
    this.route.data.forEach((data: { user: User }) => this.user = data.user);
  }

  goBack() {
    this.router.navigate(['/about']);
  }

}
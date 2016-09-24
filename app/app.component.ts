import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  styles: [`
    
  `],
  template: `
    <header>
      <nav class="navbar navbar-inverse">
      <div class="container-fluid">

        <div class="navbar-header">
          <a href="#" class="navbar-brand">My Routing App</a>
        </div>

        <ul class="nav navbar-nav">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Contact</a></li>
        </ul>

      </div>
      </nav>
    </header>

    <main>

      <router-outlet></router-outlet>

    </main>
  `
})
export class AppComponent {
  message = 'This is the sample message.';
}
import { Component } from '@angular/core';
import { reduce } from 'rxjs';

@Component({
  selector: 'app-root',
  template:`<h1>Welcome to new component tour</h1>
  <h1>The new component tour is much interesting</h1>`,
  styles:[`
  h1{ 
    color:red;
  }`]
})
export class AppComponent {
  title = 'FirstPro';
}

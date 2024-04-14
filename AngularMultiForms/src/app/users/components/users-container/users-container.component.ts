import { Component } from '@angular/core';
import { UsersPageComponent } from '../users-page/users-page.component';

@Component({
  selector: 'app-users-container',
  standalone: true,
  imports: [UsersPageComponent],
  template: `
    <app-users-page/>
  `
})
export class UsersContainerComponent {

}

import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UsersContainerComponent } from './users/components/users-container/users-container.component';
import { StepperContainerComponent } from './stepper/components/stepper-container/stepper-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UsersContainerComponent, StepperContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'AngularMultiForms';
}

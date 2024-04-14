import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StepperPageComponent } from '../stepper-page/stepper-page.component';

@Component({
  selector: 'app-stepper-container',
  standalone: true,
  imports: [RouterOutlet, StepperPageComponent],
  template: `
    <app-stepper-page/>
    <router-outlet></router-outlet>
  `
})
export class StepperContainerComponent {

}

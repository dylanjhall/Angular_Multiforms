import { Component } from '@angular/core';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatMenu, MatMenuTrigger } from '@angular/material/menu';



@Component({
  selector: 'app-stepper-page',
  standalone: true,
  imports: [MatToolbar, MatButton, MatIcon, MatMenu, MatMenuTrigger],
  templateUrl: './stepper-page.component.html',
  styleUrl: './stepper-page.component.scss'
})
export class StepperPageComponent {

}

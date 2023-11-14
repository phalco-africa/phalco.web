import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { initFlowbite } from 'flowbite';


import { NxWelcomeComponent } from './nx-welcome.component';
@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule],
  selector: 'phalco-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'phalco';

  ngOnInit(): void {
    initFlowbite();
  }
}

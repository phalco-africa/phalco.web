import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [RouterModule],
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

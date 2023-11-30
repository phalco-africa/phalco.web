import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { AuthService } from '../@common/services/auth.service';
import { lastValueFrom } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  constructor(private auth: AuthService) { }

  async onSubmit() {
    const res = await lastValueFrom(this.auth.login({ email: 'form@yopmail.com', password: 'dkfjdjfkdj', rememberMe: false }));
  }
}

import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AuthService, LoginRequest } from '@phalco/shared/data-access';
import { lastValueFrom, timer } from 'rxjs';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  model: LoginRequest = {
    email: '',
    password: '',
    rememberMe: false
  };

  loading = false;
  message?: string | null;
  success = false;

  constructor(private router: Router, private auth: AuthService) { }

  async onSubmit() {
    this.loading = true;
    this.message = null;

    try {
      const res = await lastValueFrom(this.auth.login(this.model));

      if (!res.success) {
        this.message = res.message;
        this.success = false;
        return;
      }

      this.loading = false;
      this.success = true;
      this.message = 'Login was successful';
      this.model = {
        email: '',
        password: '',
        rememberMe: false
      };

      await lastValueFrom(timer(1000));
      await this.router.navigate(['']);
    } catch (e) {
      this.message = e instanceof Error ? e.message : "Unknown error."
      this.success = false;
    } finally {
      this.loading = false;
    }
  }
}

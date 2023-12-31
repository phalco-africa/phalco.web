import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { lastValueFrom, timer } from 'rxjs';

import { AuthService, RegisterRequest } from '@phalco/shared/data-access';

import { PasswordMatchesDirective } from '../@common/directives/password.matches.directive';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, PasswordMatchesDirective],
  templateUrl: './register.page.html',
  styles: ``
})
export class RegisterPage {
  model: RegisterRequest & { terms: boolean; } = {
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  };

  loading = false;
  message?: string | null;
  success = false;

  constructor(private router: Router, private auth: AuthService) { }

  async onSubmit() {
    this.loading = true;
    this.message = null;

    try {
      const res = await lastValueFrom(this.auth.register(this.model));

      if (!res.success) {
        this.message = res.message;
        this.success = false;
        return;
      }

      this.loading = false;
      this.success = true;
      this.message = 'Registration was successful';
      this.model = {
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
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

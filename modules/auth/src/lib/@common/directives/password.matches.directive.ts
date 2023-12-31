import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[phalcoPasswordMatches]',
  standalone: true,
  providers: [{ provide: NG_VALIDATORS, useExisting: PasswordMatchesDirective, multi: true }]
})
export class PasswordMatchesDirective implements Validator {
  validate(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');
    return !(password && confirmPassword && password.value === confirmPassword.value) ? { passwordMatches: true } : null;
  }
}



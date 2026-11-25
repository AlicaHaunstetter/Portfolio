import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

type SendStatus = 'idle' | 'sending' | 'success' | 'error';

@Component({
  imports: [ReactiveFormsModule, RouterLink],
  selector: 'app-contact',
  styleUrl: './contact.scss',
  templateUrl: './contact.html',
})
export class Contact {
  private fb = inject(FormBuilder);
  private http = inject(HttpClient);

  private readonly endpoint = 'https://alica-haunstetter.de/sendMail.php';

  status = signal<SendStatus>('idle');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  /**
   * Checks whether a form control should display a validation error.
   * @param controlName - Name of the form control to check.
   * @returns True if the control is invalid and has been touched.
   */
  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

  /**
   * Validates the form and sends the contact message to the mail endpoint.
   * Updates the send status and resets the form on success.
   */
  submit(): void {
    this.form.markAllAsTouched();
    if (this.form.invalid || this.status() === 'sending') return;

    const { name, email, message } = this.form.getRawValue();
    this.status.set('sending');

    this.http.post<{ success: boolean }>(this.endpoint, { name, email, message }).subscribe({
      next: () => {
        this.status.set('success');
        this.form.reset();
      },
      error: () => {
        this.status.set('error');
      },
    });
  }
}

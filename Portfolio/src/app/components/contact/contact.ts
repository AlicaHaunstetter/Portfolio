import { Component, inject, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';

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

  private readonly endpoint = 'https://deinedomain.de/sendMail.php';

  status = signal<SendStatus>('idle');

  form = this.fb.nonNullable.group({
    name: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    message: ['', [Validators.required, Validators.minLength(10)]],
    privacy: [false, Validators.requiredTrue],
  });

  isInvalid(controlName: keyof typeof this.form.controls): boolean {
    const control = this.form.controls[controlName];
    return control.invalid && control.touched;
  }

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

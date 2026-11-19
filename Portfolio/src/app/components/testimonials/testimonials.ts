import { Component, computed, signal } from '@angular/core';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  imports: [],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      text: "Michael really kept the team together with his great organization and clear communication. We wouldn't have got this far without his commitment.",
      author: 'V. Schuster',
      role: 'Team Partner',
      image: '/img/testimonial-1.jpg',
    },
    {
      text: 'Placeholder text for the second testimonial.',
      author: 'A. Example',
      role: 'Frontend Developer',
      image: '/img/testimonial-2.jpg',
    },
    {
      text: 'Placeholder text for the third testimonial.',
      author: 'B. Example',
      role: 'Project Lead',
      image: '/img/testimonial-3.jpg',
    },
  ];

  currentIndex = signal(0);
  current = computed(() => this.testimonials[this.currentIndex()]);

  next(): void {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  prev(): void {
    this.currentIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}

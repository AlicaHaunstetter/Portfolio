import { Component, computed, signal } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Testimonial {
  text: string;
  author: string;
  role: string;
  image: string;
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-testimonials',
  styleUrl: './testimonials.scss',
  templateUrl: './testimonials.html',
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      text: 'testimonials.giuliano.text',
      author: 'Giuliano Gioia',
      role: 'testimonials.giuliano.role',
      image: '/img/GIULIANOGIOIA.jpg',
    },
    {
      text: 'testimonials.patrick.text',
      author: 'Patrick Wagner',
      role: 'testimonials.patrick.role',
      image: 'img/PatrickWagner.jpg',
    },
    {
      text: 'testimonials.neelima.text',
      author: 'Neelima Bhupati',
      role: 'testimonials.neelima.role',
      image: '/img/NEELIMABHUPATI.jpg',
    },
  ];

  currentIndex = signal(0);
  current = computed(() => this.testimonials[this.currentIndex()]);

  /** Shows the next testimonial, wrapping around to the first. */
  next(): void {
    this.currentIndex.update((i) => (i + 1) % this.testimonials.length);
  }

  /** Shows the previous testimonial, wrapping around to the last. */
  prev(): void {
    this.currentIndex.update((i) => (i - 1 + this.testimonials.length) % this.testimonials.length);
  }

  /**
   * Shows the testimonial at the given position.
   * @param index - Zero-based index of the testimonial.
   */
  goTo(index: number): void {
    this.currentIndex.set(index);
  }
}

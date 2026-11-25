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
      text: 'Alica has an impressive eye for design paired with a genuinely structured approach to coding. She never just settles for a quick fix—she takes the time to understand the root cause and comes up with clean, thoughtful solutions. Her progress and curiosity make her a great asset to any frontend team.',
      author: 'Giuliano Gioia',
      role: 'Mentor, Developer Akademier',
      image: '/img/GIULIANOGIOIA.jpg',
    },
    {
      text: 'Working with Alica on group projects was always super smooth and motivating. She brings great UI/UX ideas to the table, stays calm when tricky bugs pop up, and communicates clearly so the whole team stays on track.',
      author: 'Patrick Wagner',
      role: 'Frontend Developer',
      image: 'img/PatrickWagner.jpg',
    },
    {
      text: 'Coming from C++, I was really impressed by how clean and well-organized Alicas frontend code is. She solves problems well, has a great sense for design, and working through ideas with her always improved our projects. Beyond her technical skills, Alica is a fantastic team player—she is always friendly, approachable, and brings a positive energy that lifts the entire team.',
      author: 'Neelima Bhupati',
      role: 'Developer (former C++ Engineer)',
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

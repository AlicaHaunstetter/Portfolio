import { Component, computed, input } from '@angular/core';

type BlobVariant = 'loop' | 'wild';

interface BlobShape {
  points: number; // number of anchor points
  jitter: number; // how far points may break out of their order → creates loops
  minRadius: number; // smallest distance to the center (fraction of RADIUS)
  radiusRange: number; // random extra distance
  blur: number; // blur strength
}

const SHAPES: Record<BlobVariant, BlobShape> = {
  loop: { points: 14, jitter: 1.8, minRadius: 0.35, radiusRange: 0.8, blur: 25 },
  wild: { points: 18, jitter: 2.2, minRadius: 0.3, radiusRange: 0.85, blur: 25 },
};

const CENTER = 300; // center of the 600×600 canvas
const RADIUS = 200;
let nextId = 0;

/** Seeded random generator: same seed = same shape on every page load */
function createRandom(seed: number) {
  let state = seed;
  return () => (state = (state * 16807) % 2147483647) / 2147483647;
}

/** Distributes points around the center with random angle and distance */
function createPoints(shape: BlobShape, random: () => number): [number, number][] {
  const step = (2 * Math.PI) / shape.points;
  return Array.from({ length: shape.points }, (_, i) => {
    const angle = i * step + (random() - 0.5) * shape.jitter * step;
    const radius = RADIUS * (shape.minRadius + random() * shape.radiusRange);
    return [CENTER + radius * Math.cos(angle), CENTER + radius * Math.sin(angle)];
  });
}

/** Connects the points into a smooth closed curve */
function toSmoothPath(points: [number, number][]): string {
  const n = points.length;
  const f = (v: number) => v.toFixed(1);
  let d = `M${f(points[0][0])},${f(points[0][1])}`;
  for (let i = 0; i < n; i++) {
    const [x0, y0] = points[(i - 1 + n) % n];
    const [x1, y1] = points[i];
    const [x2, y2] = points[(i + 1) % n];
    const [x3, y3] = points[(i + 2) % n];
    d +=
      ` C${f(x1 + (x2 - x0) / 6)},${f(y1 + (y2 - y0) / 6)}` +
      ` ${f(x2 - (x3 - x1) / 6)},${f(y2 - (y3 - y1) / 6)} ${f(x2)},${f(y2)}`;
  }
  return d + 'Z';
}

@Component({
  selector: 'app-blob',
  templateUrl: './blob.html',
  styleUrl: './blob.scss',
})
export class Blob {
  color = input<'green' | 'purple'>('purple');
  variant = input<BlobVariant>('loop');
  seed = input(1); // different number (> 0) = different shape
  duration = input(16); // seconds per cycle

  readonly filterId = `blob-blur-${nextId++}`; // must be unique per blob
  readonly reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  shape = computed(() => SHAPES[this.variant()]);

  /** 3 shape variants with the same point count → the browser can morph between them */
  paths = computed(() => {
    const random = createRandom(this.seed());
    return [0, 1, 2].map(() => toSmoothPath(createPoints(this.shape(), random)));
  });

  /** Sequence: shape 1 → 2 → 3 → back to 1 */
  animationValues = computed(() => [...this.paths(), this.paths()[0]].join(';'));

  fill = computed(() =>
    this.color() === 'green' ? 'var(--color-primary-1)' : 'var(--color-primary-2)',
  );
}

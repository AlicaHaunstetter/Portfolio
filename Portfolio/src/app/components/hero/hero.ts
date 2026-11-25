import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Blob } from '../blob/blob';

@Component({
  imports: [Blob, TranslatePipe],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}

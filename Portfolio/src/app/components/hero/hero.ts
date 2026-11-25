import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BackgroundBlob } from '../blob/blob';

@Component({
  imports: [BackgroundBlob, TranslatePipe],
  selector: 'app-hero',
  styleUrl: './hero.scss',
  templateUrl: './hero.html',
})
export class Hero {}

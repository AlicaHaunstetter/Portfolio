import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { Blob } from '../blob/blob';

@Component({
  imports: [Blob, TranslatePipe],
  selector: 'app-about-me',
  styleUrl: './about-me.scss',
  templateUrl: './about-me.html',
})
export class AboutMe {}

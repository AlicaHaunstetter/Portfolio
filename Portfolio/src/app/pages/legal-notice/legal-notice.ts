import { Component } from '@angular/core';
import { LegalContent } from '../components/legal-content/legal-content';

@Component({
  imports: [LegalContent],
  selector: 'app-legal-notice',
  styleUrl: './legal-notice.scss',
  templateUrl: './legal-notice.html',
})
export class LegalNotice {}

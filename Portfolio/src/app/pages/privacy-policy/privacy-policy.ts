import { Component } from '@angular/core';
import { PrivacyContent } from '../components/privacy-content/privacy-content';

@Component({
  imports: [PrivacyContent],
  selector: 'app-privacy-policy',
  styleUrl: './privacy-policy.scss',
  templateUrl: './privacy-policy.html',
})
export class PrivacyPolicy {}

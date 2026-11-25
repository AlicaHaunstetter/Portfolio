import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

@Component({
  imports: [RouterLink, TranslatePipe],
  selector: 'app-footer',
  styleUrl: './footer.scss',
  templateUrl: './footer.html',
})
export class Footer {
  readonly year = new Date().getFullYear();

  socialLinks: SocialLink[] = [
    {
      name: 'GitHub',
      url: 'https://github.com/AlicaHaunstetter',
      icon: '/icons/social/github.svg',
    },
    { name: 'Email', url: 'mailto:info@alica-haunstetter.de', icon: '/icons/social/mail.svg' },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/alica-haunstetter/',
      icon: '/icons/social/linkedin.svg',
    },
  ];
}

import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { BackgroundBlob } from '../blob/blob';

interface Project {
  name: string;
  skills: string[];
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  imports: [BackgroundBlob, TranslatePipe],
  selector: 'app-portfolio',
  styleUrl: './portfolio.scss',
  templateUrl: './portfolio.html',
})
export class Portfolio {
  projects: Project[] = [
    {
      name: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description: 'portfolio.projects.join',
      image: '/img/JOIN.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      name: 'Wicked Woods',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description: 'portfolio.projects.wickedWoods',
      image: '/img/WICKEDWOODS.png',
      liveUrl: 'https://wickedwoods.alica-haunstetter.de/',
      githubUrl: 'https://github.com/AlicaHaunstetter/WickedWoods-Jump-Run',
    },
    {
      name: 'DA Bubble',
      skills: ['Angular', 'TypeScript', 'Firebase'],
      description: 'portfolio.projects.daBubble',
      image: '/img/BUBBLE.png',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
}

import { Component } from '@angular/core';

interface Project {
  name: string;
  skills: string[];
  description: string;
  image: string;
  liveUrl: string;
  githubUrl: string;
}

@Component({
  imports: [],
  selector: 'app-portfolio',
  styleUrl: './portfolio.scss',
  templateUrl: './portfolio.html',
})
export class Portfolio {
  projects: Project[] = [
    {
      name: 'Join',
      skills: ['Angular', 'TypeScript', 'HTML', 'CSS', 'Firebase'],
      description:
        'Task manager inspired by the Kanban System. Create and organize tasks using drag and drop functions, assign users and categories.',
      image: '/img/JOIN.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      name: 'Wicked Woods',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help the little witch survive the wicked woods by collecting potions and fending off dark creatures.',
      image: '/img/WICKEDWOODS.png',
      liveUrl: 'https://wickedwoods.alica-haunstetter.de/',
      githubUrl: 'https://github.com/AlicaHaunstetter/WickedWoods-Jump-Run',
    },
    {
      name: 'DA Bubble',
      skills: ['Angular', 'TypeScript', 'Firebase'],
      description:
        'This App is a Slack Clone App. It revolutionizes team communication and collaboration with its intuitive interface, real-time messaging, and robust channel organization.',
      image: '/img/BUBBLE.png',
      liveUrl: '#',
      githubUrl: '#',
    },
  ];
}

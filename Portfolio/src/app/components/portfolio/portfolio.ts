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
      name: 'Sharkie',
      skills: ['JavaScript', 'HTML', 'CSS'],
      description:
        'A simple Jump-and-Run game based on an object-oriented approach. Help sharkie to find coins and poison bottles to fight against the killer whale.',
      image: '/img/SHARKIE.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      name: 'Simple CRM',
      skills: ['Angular', 'Firebase'],
      description:
        'A very Simple Customer Relationship Management system working with CRUD functionality.',
      image: '/img/CRM.png',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      name: 'Pokédex',
      skills: ['JavaScript', 'HTML', 'CSS', 'Api'],
      description:
        'Based on the PokéAPI a simple library that provides and catalogues pokemon information.',
      image: '/img/POKEDEX.png',
      liveUrl: '#',
      githubUrl: '#',
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

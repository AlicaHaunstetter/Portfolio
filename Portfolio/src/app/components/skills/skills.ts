import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

interface Skill {
  name: string;
  icon: string;
}

@Component({
  imports: [TranslatePipe],
  selector: 'app-skills',
  styleUrl: './skills.scss',
  templateUrl: './skills.html',
})
export class Skills {
  skills: Skill[] = [
    { name: 'HTML', icon: 'html.png' },
    { name: 'CSS', icon: 'CSS.png' },
    { name: 'JavaScript', icon: 'JS.png' },
    { name: 'TypeScript', icon: 'TS.png' },
    { name: 'Angular', icon: 'angular.png' },
    { name: 'Supabase', icon: 'supabase.png' },
    { name: 'Git', icon: 'git.png' },
    { name: 'REST-API', icon: 'API.png' },
    { name: 'Scrum', icon: 'scrum.png' },
    { name: 'Material Design', icon: 'materialdesign.png' },
    { name: 'skills.learning', icon: 'learning.png' },
  ];
}

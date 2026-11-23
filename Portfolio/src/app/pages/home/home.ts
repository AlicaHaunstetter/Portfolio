import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { AboutMe } from '../../components/about-me/about-me';
import { Skills } from '../../components/skills/skills';
import { Portfolio } from '../../components/portfolio/portfolio';
import { Testimonials } from '../../components/testimonials/testimonials';
import { Contact } from '../../components/contact/contact';

@Component({
  imports: [Hero, AboutMe, Skills, Portfolio, Testimonials, Contact],
  selector: 'app-home',
  styleUrl: './home.scss',
  templateUrl: './home.html',
})
export class Home {}

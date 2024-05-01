import { Component, NgModule } from '@angular/core';
//import {CommonModule} from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { projectData } from '../constants/projectData';
import { techstackData } from '../constants/techstackData';
import { gamesData } from '../constants/gamesData';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarouselModule, TagModule, ButtonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
getSeverity(arg0: any) {
throw new Error('Method not implemented.');
}
  title = 'my-app';
  projects = projectData;
  techstacks = techstackData;
  games = gamesData;

  openLink(link: string) {
    window.open(link);
  }


responsiveOptions: any;
}

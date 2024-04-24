import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';

// @NgModule({
//   declarations: [
//     AppComponent
//   ],
//   imports: [
//     CarouselModule
//   ],
//   providers: [],
//   bootstrap: [AppComponent]
// })

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
  projects: any = [
  {
    name: "PSAccess",
    description: "A web application made for the hackathon CodeSprint 2022. Built using Next.js, PostgreSQL, Prisma and React.",
    link: "https://github.com/meerian/psa-codesprint-2022",
    img: "/assets/psaccess.svg"
  },
  {
    name: "Itch.io Page",
    description: "My main Itch.io page where I upload the games I have created using Unity, Javascript and GameMaker Studios.",
    link: "https://meerian.itch.io/",
    img: "/assets/itchio.svg"
  },  {
    name: "Meerian.vip",
    description: "Source code for this website. Built using Angular, PrimeNG and Typescript.",
    link: "https://github.com/meerian/meerian.github.io",
    img: "/assets/website.svg"
  },  {
    name: "Github Page",
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    link: "https://github.com/meerian",
    img: "/assets/psaccess.svg"
  },

  ];
responsiveOptions: any;
}

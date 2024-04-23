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
    link: "https://github.com/meerian/psa-codesprint-2022"
  },
  {
    name: "PSAccess",
    description: "A web application made for the hackathon CodeSprint 2022. Built using Next.js, PostgreSQL, Prisma and React.",
    link: "https://github.com/meerian/psa-codesprint-2022"
  },  {
    name: "PSAccess",
    description: "A web application made for the hackathon CodeSprint 2022. Built using Next.js, PostgreSQL, Prisma and React.",
    link: "https://github.com/meerian/psa-codesprint-2022"
  },  {
    name: "PSAccess",
    description: "A web application made for the hackathon CodeSprint 2022. Built using Next.js, PostgreSQL, Prisma and React.",
    link: "https://github.com/meerian/psa-codesprint-2022"
  },

  ];
responsiveOptions: any;
}

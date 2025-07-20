import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationComponent } from './components/navigation/navigation.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';
import { CertificationsComponent } from './components/certifications/certifications.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    NavigationComponent,
    HeaderComponent,
    AboutComponent,
    ExperienceComponent,
    ProjectsComponent,
    SkillsComponent,
    CertificationsComponent,
    ContactComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen bg-gray-50">
      <app-navigation></app-navigation>
      <app-header></app-header>
      <app-about></app-about>
      <app-experience></app-experience>
      <app-projects></app-projects>
      <app-skills></app-skills>
      <app-certifications></app-certifications>
      <app-contact></app-contact>
      <app-footer></app-footer>
    </div>
  `,
  styles: []
})
export class AppComponent {
  title = 'adi-portfolio';
}

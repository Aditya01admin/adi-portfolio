import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description: string;
  tags: string[];
}

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
        </div>
        <div class="space-y-8">
          <div *ngFor="let exp of experiences" class="bg-white rounded-lg shadow-lg p-6 hover-scale">
            <div class="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div class="flex items-center mb-4 md:mb-0">
                <img [src]="exp.logo" [alt]="exp.company" class="w-12 h-12 rounded-lg mr-4">
                <div>
                  <h3 class="text-xl font-semibold text-gray-900">{{ exp.position }}</h3>
                  <p class="text-blue-600 font-medium">{{ exp.company }}</p>
                </div>
              </div>
              <div class="text-gray-500">{{ exp.duration }}</div>
            </div>
            <p class="text-gray-600 mb-4">{{ exp.description }}</p>
            <div class="flex flex-wrap gap-2">
              <span *ngFor="let tag of exp.tags" 
                    class="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ExperienceComponent {
  experiences: Experience[] = [
    {
      company: 'Tech Solutions Inc.',
      logo: 'https://via.placeholder.com/48x48/3b82f6/ffffff?text=TS',
      position: 'Senior Frontend Developer',
      duration: 'Jan 2022 - Present',
      description: 'Led development of responsive web applications using Angular and React. Collaborated with cross-functional teams to deliver high-quality software solutions.',
      tags: ['Angular', 'React', 'TypeScript', 'Node.js', 'AWS']
    },
    {
      company: 'Digital Innovations Ltd.',
      logo: 'https://via.placeholder.com/48x48/10b981/ffffff?text=DI',
      position: 'Full Stack Developer',
      duration: 'Jun 2020 - Dec 2021',
      description: 'Developed and maintained full-stack applications. Implemented RESTful APIs and integrated third-party services.',
      tags: ['JavaScript', 'Python', 'MongoDB', 'Express.js', 'Docker']
    },
    {
      company: 'StartUp Ventures',
      logo: 'https://via.placeholder.com/48x48/f59e0b/ffffff?text=SV',
      position: 'Junior Developer',
      duration: 'Jan 2020 - May 2020',
      description: 'Contributed to various web development projects and learned modern development practices.',
      tags: ['HTML', 'CSS', 'JavaScript', 'Git', 'Agile']
    }
  ];
}

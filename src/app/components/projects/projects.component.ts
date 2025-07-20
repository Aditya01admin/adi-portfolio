import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  url: string;
}

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div *ngFor="let project of projects" class="bg-white rounded-lg shadow-lg overflow-hidden hover-scale">
            <div class="p-6">
              <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ project.title }}</h3>
              <p class="text-gray-600 mb-4">{{ project.description }}</p>
              <div class="flex flex-wrap gap-2 mb-4">
                <span *ngFor="let tech of project.technologies" 
                      class="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm">
                  {{ tech }}
                </span>
              </div>
              <a [href]="project.url" target="_blank" 
                 class="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium">
                View Project <i class="fas fa-external-link-alt ml-1"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ProjectsComponent {
  projects: Project[] = [
    {
      title: 'Intrusion Detection System',
      description: 'Built a model for intrusion detection system that can check for any intruders in the system. Used algorithms like KNN, Decision Tree, Logistic Regression to find a suitable algorithm for the model.',
      technologies: ['Python', 'Machine Learning', 'KNN', 'Decision Tree', 'Logistic Regression'],
      url: 'https://github.com/Aditya01admin/intrusion-detection'
    },
    {
      title: 'Flutter Voice Assistant using ChatGPT & Dall-E',
      description: 'Led project planning and coordination efforts. Implemented seamless integration of Chat-GPT and DALL-E APIs, enhancing the voice assistant\'s interactive and creative capabilities.',
      technologies: ['Dart', 'Flutter', 'OpenAI API', 'ChatGPT', 'DALL-E'],
      url: 'https://github.com/Aditya01admin/flutter-voice-assistant'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and TailwindCSS featuring component-based architecture.',
      technologies: ['Angular', 'TailwindCSS', 'TypeScript'],
      url: 'https://github.com/Aditya01admin/adi-portfolio'
    }
  ];
}

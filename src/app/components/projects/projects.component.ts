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
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with user authentication, payment integration, and admin dashboard.',
      technologies: ['Angular', 'Node.js', 'MongoDB', 'Stripe'],
      url: 'https://github.com/aditya/ecommerce-platform'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'Material-UI', 'Socket.io'],
      url: 'https://github.com/aditya/task-manager'
    },
    {
      title: 'Weather Dashboard',
      description: 'A responsive weather dashboard with location-based forecasts and interactive charts.',
      technologies: ['Vue.js', 'Chart.js', 'OpenWeather API', 'Tailwind'],
      url: 'https://github.com/aditya/weather-dashboard'
    },
    {
      title: 'Portfolio Website',
      description: 'A modern, responsive portfolio website built with Angular and TailwindCSS.',
      technologies: ['Angular', 'TailwindCSS', 'TypeScript'],
      url: 'https://github.com/aditya/portfolio'
    }
  ];
}

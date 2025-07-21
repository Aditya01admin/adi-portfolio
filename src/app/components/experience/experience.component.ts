import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Project {
  name: string;
  description: string;
  tags: string[];
}

export interface Experience {
  company: string;
  logo: string;
  position: string;
  duration: string;
  description?: string;
  projects?: Project[];
  tags?: string[];
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
            
            <!-- Company Description (if no projects) -->
            <p *ngIf="exp.description && !exp.projects" class="text-gray-600 mb-4">{{ exp.description }}</p>
            
            <!-- Projects Section -->
            <div *ngIf="exp.projects" class="space-y-4 mb-4">
              <div *ngFor="let project of exp.projects" class="border-l-4 border-blue-500 pl-4">
                <h4 class="text-lg font-semibold text-gray-800 mb-2">{{ project.name }}</h4>
                <p class="text-gray-600 mb-3">{{ project.description }}</p>
                <div class="flex flex-wrap gap-2">
                  <span *ngFor="let tag of project.tags" 
                        class="bg-gray-100 text-gray-700 px-2 py-1 rounded text-sm">
                    {{ tag }}
                  </span>
                </div>
              </div>
            </div>
            
            <!-- Company-level tags (if no projects) -->
            <div *ngIf="exp.tags && !exp.projects" class="flex flex-wrap gap-2">
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
      company: 'CRIF Solutions',
      logo: 'assets/Crif_logo.png',
      position: 'Software Engineering Intern',
      duration: 'Sep 2024 – Present',
      projects: [
        {
          name: 'CIMB (ETL Data Pipeline)',
          description: 'Achieved over 85% unit test coverage for a mission-critical Java ETL pipeline using JUnit and JaCoCo. Eliminated critical data corruption risks in financial reporting by implementing a rigorous, test-driven development process. Improved long-term codebase health by 15% by refactoring over 100 legacy code smells identified with SonarQube. Hardened the CI/CD pipeline with automated quality gates, ensuring new features met stringent standards before deployment.',
          tags: ['Java', 'Spring Boot', 'JUnit', 'JaCoCo', 'SonarQube', 'ETL', 'CI/CD']
        },
        {
          name: 'CHRONO (SaaS Data Mapping Tool)',
          description: 'Reduced client onboarding engineering effort by 75% by delivering a self-service, automated data-mapping platform. Architected the complete client-facing application from the ground up using Angular, establishing the core framework for all future features. Empowered non-technical bank employees to manage complex data schemas independently, removing engineering as a daily bottleneck. Implemented a secure, OTP-based authentication and password recovery workflow.',
          tags: ['Angular', 'TypeScript', 'Authentication', 'SaaS', 'Data Mapping', 'UI/UX']
        }
      ]
    }
  ];
}

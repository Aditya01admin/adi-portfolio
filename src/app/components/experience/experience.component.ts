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
      company: 'CRIF Solutions',
      logo: 'https://via.placeholder.com/48x48/1e40af/ffffff?text=CRIF',
      position: 'Software Engineering Intern',
      duration: 'Sep 2024 – Present',
      description: 'Working on CIMB ETL Data Pipeline: Achieved over 85% unit test coverage for mission-critical Java ETL pipeline using JUnit and JaCoCo. Eliminated critical data corruption risks in financial reporting. Working on CHRONO SaaS Data Mapping Tool: Reduced client onboarding engineering effort by 75% by delivering a self-service, automated data-mapping platform using Angular.',
      tags: ['Java', 'Angular', 'JUnit', 'JaCoCo', 'SonarQube', 'ETL', 'CI/CD']
    }
  ];
}

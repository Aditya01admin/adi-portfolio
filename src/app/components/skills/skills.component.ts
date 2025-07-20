import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface Skill {
  name: string;
  icon: string;
  color: string;
}

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="py-16 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          <div *ngFor="let skill of skills" class="text-center hover-scale">
            <div class="bg-white rounded-lg p-6 shadow-lg">
              <i [class]="skill.icon" class="text-4xl mb-4" [style.color]="skill.color"></i>
              <p class="text-gray-700 font-medium">{{ skill.name }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class SkillsComponent {
  skills: Skill[] = [
    { name: 'C++', icon: 'fas fa-code', color: '#00599C' },
    { name: 'Java', icon: 'fab fa-java', color: '#ED8B00' },
    { name: 'JavaScript', icon: 'fab fa-js-square', color: '#f7df1e' },
    { name: 'TypeScript', icon: 'fas fa-code', color: '#3178c6' },
    { name: 'HTML5', icon: 'fab fa-html5', color: '#e34f26' },
    { name: 'CSS3', icon: 'fab fa-css3-alt', color: '#1572b6' },
    { name: 'SpringBoot', icon: 'fas fa-leaf', color: '#6DB33F' },
    { name: 'Angular', icon: 'fab fa-angular', color: '#dd0031' },
    { name: 'SQL', icon: 'fas fa-database', color: '#336791' },
    { name: 'Docker', icon: 'fab fa-docker', color: '#2496ed' },
    { name: 'Git', icon: 'fab fa-git-alt', color: '#f05032' },
    { name: 'AWS', icon: 'fab fa-aws', color: '#ff9900' }
  ];
}

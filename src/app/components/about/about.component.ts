import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Hello! I'm {{ firstName }}</h2>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-600 leading-relaxed" [innerHTML]="aboutDescription"></p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class AboutComponent {
  firstName = 'Aditya';
  
  aboutDescription = `
    I'm a passionate <strong>Software Engineering Intern</strong> at <strong>CRIF Solutions</strong> with expertise in 
    <strong>Java</strong>, <strong>Angular</strong>, and <strong>full-stack development</strong>. 
    I specialize in <strong>ETL data pipelines</strong>, <strong>SaaS applications</strong>, and <strong>machine learning</strong>, 
    with a strong focus on creating <strong>robust, scalable solutions</strong> and 
    <strong>high-quality, test-driven code</strong>.
  `;
}

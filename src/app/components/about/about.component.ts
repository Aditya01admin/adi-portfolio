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
    I am a <strong>software engineer</strong> who builds <strong>commercial products</strong> and makes <strong>critical systems reliable</strong>. 
    With expertise in <strong>Angular</strong>, <strong>Java</strong>, and <strong>Spring Boot</strong>, I have a proven record of 
    <strong>automating processes</strong>, creating <strong>new revenue streams</strong>, and ensuring <strong>data integrity</strong> 
    for multi-national financial platforms. I build software that <strong>empowers users</strong> and delivers 
    <strong>measurable business results</strong>.
  `;
}

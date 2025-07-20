import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="home" class="pt-20 pb-16 gradient-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex flex-col lg:flex-row items-center justify-between">
          <div class="lg:w-2/3 text-white mb-8 lg:mb-0">
            <h1 class="text-4xl md:text-6xl font-bold mb-4 fade-in">{{ name }}</h1>
            <p class="text-xl md:text-2xl mb-8 fade-in">{{ tagline }}</p>
            <div class="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 fade-in">
              <a [href]="linkedinUrl" target="_blank" 
                 class="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                <i class="fab fa-linkedin mr-2"></i>View LinkedIn
              </a>
              <a [href]="resumeUrl" target="_blank"
                 class="border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center justify-center">
                <i class="fas fa-download mr-2"></i>View Resume
              </a>
            </div>
          </div>
          <div class="lg:w-1/3 flex justify-center">
            <div class="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl hover-scale">
              <img [src]="profileImage" [alt]="name" class="w-full h-full object-cover">
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class HeaderComponent {
  name = 'Aditya Kumar Gupta';
  tagline = 'Full Stack Developer & Software Engineer';
  profileImage = 'assets/PP.jpg';
  linkedinUrl = 'https://www.linkedin.com/in/guptakraditya/';
  resumeUrl = 'https://drive.google.com/file/d/15y60WXDBMSGtS5dcQ7m9umVpBc0iJfHz/view?usp=sharing';
}

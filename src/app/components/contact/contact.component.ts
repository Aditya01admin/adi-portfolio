import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="contact" class="py-16 gradient-bg">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 class="text-3xl md:text-4xl font-bold text-white mb-8">Get In Touch</h2>
        <p class="text-xl text-white mb-8">Let's connect and discuss opportunities!</p>
        <div class="flex justify-center space-x-6">
          <a [href]="'mailto:' + email" class="text-white hover:text-gray-200 transition-colors">
            <i class="fas fa-envelope text-3xl"></i>
          </a>
          <a [href]="linkedinUrl" target="_blank" class="text-white hover:text-gray-200 transition-colors">
            <i class="fab fa-linkedin text-3xl"></i>
          </a>
          <a [href]="githubUrl" target="_blank" class="text-white hover:text-gray-200 transition-colors">
            <i class="fab fa-github text-3xl"></i>
          </a>
          <a [href]="twitterUrl" target="_blank" class="text-white hover:text-gray-200 transition-colors">
            <i class="fab fa-twitter text-3xl"></i>
          </a>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class ContactComponent {
  email = 'aditya@example.com';
  linkedinUrl = 'https://linkedin.com/in/aditya-sharma';
  githubUrl = 'https://github.com/aditya-sharma';
  twitterUrl = 'https://twitter.com/aditya_sharma';
}

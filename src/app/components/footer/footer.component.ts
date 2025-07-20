import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-gray-900 text-white py-8">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p class="mb-4">© 2024 {{ name }}. Built with Angular & TailwindCSS.</p>
        <div class="flex justify-center space-x-4">
          <i class="fab fa-angular text-red-500"></i>
          <i class="fab fa-css3-alt text-blue-500"></i>
          <i class="fab fa-js-square text-yellow-500"></i>
        </div>
      </div>
    </footer>
  `,
  styles: []
})
export class FooterComponent {
  name = 'Aditya Sharma';
}

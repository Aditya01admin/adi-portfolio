import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="fixed top-0 w-full bg-white shadow-md z-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between items-center py-4">
          <div class="text-2xl font-bold gradient-text">{{ name }}</div>
          <div class="hidden md:flex space-x-8">
            <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors">Experience</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors">Projects</a>
            <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors">Skills</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </div>
          <div class="md:hidden">
            <button (click)="toggleMobileMenu()" class="text-gray-700">
              <i class="fas fa-bars text-xl"></i>
            </button>
          </div>
        </div>
        <!-- Mobile Menu -->
        <div *ngIf="isMobileMenuOpen" class="md:hidden pb-4">
          <div class="flex flex-col space-y-2">
            <a href="#home" class="text-gray-700 hover:text-blue-600 transition-colors py-2">Home</a>
            <a href="#about" class="text-gray-700 hover:text-blue-600 transition-colors py-2">About</a>
            <a href="#experience" class="text-gray-700 hover:text-blue-600 transition-colors py-2">Experience</a>
            <a href="#projects" class="text-gray-700 hover:text-blue-600 transition-colors py-2">Projects</a>
            <a href="#skills" class="text-gray-700 hover:text-blue-600 transition-colors py-2">Skills</a>
            <a href="#contact" class="text-gray-700 hover:text-blue-600 transition-colors py-2">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  `,
  styles: []
})
export class NavigationComponent {
  name = 'Aditya Sharma';
  isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }
}

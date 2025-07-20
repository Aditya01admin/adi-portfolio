import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="certifications" class="py-16 bg-white">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
          <div class="max-w-3xl mx-auto">
            <p class="text-lg text-gray-600" [innerHTML]="certificationsText"></p>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: []
})
export class CertificationsComponent {
  certificationsText = `
    I hold certifications in <strong>AWS Cloud Practitioner</strong>, 
    <strong>Google Analytics</strong>, and <strong>Angular Development</strong>. 
    I'm committed to continuous learning and staying updated with the latest technologies.
  `;
}

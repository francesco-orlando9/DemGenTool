import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
    <main>
      <router-outlet></router-outlet>
    </main>
  `,
  styles: [
    `
      main {
        height: 100%;
        width: 100%;
        background: lightyellow;
      }
    `
  ],
})
export class AppComponent {
  title = 'DemGenTool';
}

import { NgtCanvas } from '@angular-three/core';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoesScene } from './shoe-scene.component';

@Component({
	standalone: true,
	selector: 'app-reuse-gltf',
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [NgtCanvas, ShoesScene],
	template: `
    <ngt-canvas
      shadows
      [camera]="{ position: [0, 0, 150], fov: 40 }"
      [dpr]="[1, 2]"
      initialLog
    >
      <app-shoes-scene></app-shoes-scene>
    </ngt-canvas>
  `,
})
export class ReuseGltfComponent { }

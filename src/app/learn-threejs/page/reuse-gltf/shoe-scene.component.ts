import { NgtRadianPipe } from '@angular-three/core';
import { NgtSobaOrbitControls } from '@angular-three/soba/controls';
import { NgtSobaStage, NgtSobaStageContent } from '@angular-three/soba/staging';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ShoeObject } from '../../lib';

@Component({
	standalone: true,
	selector: 'app-shoes-scene',
	changeDetection: ChangeDetectionStrategy.OnPush,
	template: `
    <ngt-soba-stage environment="city" intensity="0.6">
      <ng-template ngt-soba-stage-content>
        <app-shoe-object
          color="tomato"
          [position]="[0, 0, 0]"
        ></app-shoe-object>

        <app-shoe-object
          [rotation]="[0, 0.5, 180 | radian]"
          [position]="[0, 0, -2]"
          [scale]="-1"
          color="crimson"
        ></app-shoe-object>
      </ng-template>
    </ngt-soba-stage>
    <ngt-soba-orbit-controls autoRotate></ngt-soba-orbit-controls>
  `,
	imports: [
		NgtSobaStage,
		NgtRadianPipe,
		NgtSobaStageContent,
		NgtSobaOrbitControls,
		ShoeObject,
	],
})
export class ShoesScene { }

import { NgtCanvasModule } from '@angular-three/core';
import { NgtColorAttribute } from '@angular-three/core/attributes';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { ComponentStore } from '@ngrx/component-store';
import { LetModule, PushModule } from '@ngrx/component';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { switchMap } from 'rxjs';

interface State {
  fileModelPath: string;
}

const intitialState: State = {
  fileModelPath: '/assets/models/coffe-cup.glb',
};

@Component({
  standalone: true,
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.scss'],
  imports: [
    CommonModule,
    NgtCanvasModule,
    NgtColorAttribute,
    NgtPrimitiveModule,
    LetModule,
    PushModule,
  ],
})
export class ProductPreviewComponent extends ComponentStore<State> {
  readonly gltfLoader = inject(NgtGLTFLoader);

  readonly fileModelPath$ = this.select((s) => s.fileModelPath);

  readonly cupCoffee$ = this.fileModelPath$.pipe(
    switchMap((path) => this.gltfLoader.load(path))
  );

  constructor() {
    super(intitialState);
  }
}

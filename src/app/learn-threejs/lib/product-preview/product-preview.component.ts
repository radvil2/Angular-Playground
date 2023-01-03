import { NgtCanvasModule } from '@angular-three/core';
import { NgtColorAttribute } from '@angular-three/core/attributes';
import {
    NgtAmbientLightModule,
    NgtPointLightModule
} from '@angular-three/core/lights';
import { NgtPrimitiveModule } from '@angular-three/core/primitive';
import { NgtSobaOrbitControlsModule } from '@angular-three/soba/controls';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { CommonModule } from '@angular/common';
import { Component, inject, Input } from '@angular/core';
import { LetModule, PushModule } from '@ngrx/component';
import { ComponentStore } from '@ngrx/component-store';
import { switchMap } from 'rxjs';
import {
    Mesh,
    MeshStandardMaterial,
    Object3D,
    PerspectiveCamera
} from 'three';
import { OrbitControls } from 'three-stdlib';

type HexString = `#${string}`;

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
    NgtAmbientLightModule,
    NgtPointLightModule,
    NgtSobaOrbitControlsModule,
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

  #color: HexString = '#ff0000';

  @Input()
  set color(value: HexString) {
    this.#color = value;
    this.#applyColorToMaterial();
  }

  get color() {
    return this.#color;
  }

  cupMaterial?: MeshStandardMaterial;

  onObjectReady(object: Object3D): void {
    const mesh = object.getObjectByName('Object_2') as Mesh;
    this.cupMaterial = mesh.material as MeshStandardMaterial;
    this.#applyColorToMaterial();
  }

  onOrbitControlReady(orbitControls: OrbitControls): void {
    orbitControls.enableZoom = true;
    orbitControls.autoRotate = true;
    orbitControls.autoRotateSpeed = 9;
    orbitControls.target.set(0, 0.5, 0);
    orbitControls.object.position.setY(3);

    const camera = orbitControls.object as PerspectiveCamera;
    camera.zoom = 4;
    camera.receiveShadow = true; // idk what is this
		console.log(orbitControls)
  }

  #applyColorToMaterial(): void {
    const hexColor = parseInt(this.color.substring(1), 16);
    this.cupMaterial?.color.setHex(hexColor);
  }

  constructor() {
    super(intitialState);
  }
}

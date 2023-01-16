import {
	NgtObjectPassThrough,
	NgtObjectProps,
	provideNgtObject,
	provideObjectHostRef,
	provideObjectRef
} from '@angular-three/core';
import { NgtValueAttribute } from '@angular-three/core/attributes';
import { NgtGroup } from '@angular-three/core/group';
import { NgtMeshStandardMaterial } from '@angular-three/core/materials';
import { NgtMesh } from '@angular-three/core/meshes';
import { NgtGLTFLoader } from '@angular-three/soba/loaders';
import { AsyncPipe, NgIf } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Observable as $ } from 'rxjs';
import * as THREE from 'three';
import { ShoeGLTF } from './shoe-gltf.interface';

@Component({
	standalone: true,
	selector: 'app-shoe-object',
	templateUrl: 'shoe-object.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [
		NgtGLTFLoader,
		provideNgtObject(ShoeObject),
		provideObjectRef(ShoeObject),
		provideObjectHostRef(ShoeObject),
	],
	imports: [
		NgIf,
		AsyncPipe,
		NgtMesh,
		NgtGroup,
		NgtValueAttribute,
		NgtObjectPassThrough,
		NgtMeshStandardMaterial,
	],
})
export class ShoeObject extends NgtObjectProps<THREE.Group> {
  private gltfLoader = inject(NgtGLTFLoader);
	readonly shoe$ = this.gltfLoader.load('assets/gltf/shoe.gltf') as $<ShoeGLTF>;
	readonly encoding = THREE.LinearEncoding;
}

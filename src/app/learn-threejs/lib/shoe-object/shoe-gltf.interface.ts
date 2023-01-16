import * as THREE from 'three';
import { GLTF } from 'three-stdlib';

export interface ShoeGLTF extends GLTF {
	nodes: {
		[key in
		| 'shoe'
		| 'shoe_1'
		| 'shoe_2'
		| 'shoe_3'
		| 'shoe_4'
		| 'shoe_5'
		| 'shoe_6'
		| 'shoe_7']: THREE.Mesh;
	};
	materials: {
		[key in
		| 'laces'
		| 'mesh'
		| 'caps'
		| 'inner'
		| 'sole'
		| 'stripes'
		| 'band'
		| 'patch']: THREE.MeshStandardMaterial;
	};
}

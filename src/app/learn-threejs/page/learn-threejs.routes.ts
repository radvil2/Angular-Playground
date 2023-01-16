import { Routes } from '@angular/router';
import { LearnThreejsComponent } from './learn-threejs.component';

export const LearnThreeJSRoutes: Routes = [
	{
		path: '',
		component: LearnThreejsComponent,
		children: [
			{
				path: 'mug-editor',
				title: 'Mug Editor',
				loadComponent: async () =>
					(await import('./mug-editor/mug-editor.component'))
						.MugEditorComponent,
			},
			{
				path: 'reuse-gltf',
				title: 'Reuse GLTF',
				loadComponent: async () =>
					(await import('./reuse-gltf/reuse-gltf.component'))
						.ReuseGltfComponent,
			},
			{
				path: '',
				redirectTo: 'reuse-gltf',
				pathMatch: 'full',
			},
		],
	},
];

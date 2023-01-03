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
				path: '',
				redirectTo: 'mug-editor',
				pathMatch: 'full',
			},
		],
	},
];

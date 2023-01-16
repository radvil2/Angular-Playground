import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

export interface RouteNavigation {
	link: string;
	title: string;
	icon: string;
}

export const RouteNavigations: RouteNavigation[] = [
	{
		link: 'mug-editor',
		title: 'Mug Editor',
		icon: 'code',
	},
	{
		link: 'reuse-gltf',
		title: 'Reuse GLTF',
		icon: 'home',
	},
];

@Component({
	standalone: true,
	selector: 'app-learn-threejs',
	templateUrl: './learn-threejs.component.html',
	styleUrls: ['./learn-threejs.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		CommonModule,
		RouterModule,
		MatToolbarModule,
		MatButtonModule,
		MatIconModule,
	],
})
export class LearnThreejsComponent {
	readonly navigations = RouteNavigations;
}

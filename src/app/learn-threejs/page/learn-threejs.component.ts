import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import { LetModule } from '@ngrx/component';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';
import { ProductPreviewComponent } from 'src/app/learn-threejs/lib';

type HexValue = `#${string}`;

interface ColorOption {
	label: string;
	value: HexValue;
}

export interface RouteNavigation {
	link: string;
	title: string;
}

export const RouteNavigations: RouteNavigation[] = [
	{
		link: 'mug-editor',
		title: 'Mug Editor',
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
		ProductPreviewComponent,
		MatCardModule,
		MatButtonModule,
		MatToolbarModule,
		MatDividerModule,
		LetModule,
	],
})
export class LearnThreejsComponent {
	readonly colorOptions: ColorOption[] = [
		{
			label: 'Red',
			value: '#cc0000',
		},
		{
			label: 'Green',
			value: '#1ee234',
		},
		{
			label: 'Blue',
			value: '#006bff',
		},
		{
			label: 'Gold',
			value: '#ffd700',
		},
		{
			label: 'Black',
			value: '#181818',
		},
	];

	readonly navigations = RouteNavigations;

	readonly #selectedColor = new BehaviorSubject<ColorOption>(
		this.colorOptions[0]
	);

	readonly selectedColor$ = this.#selectedColor
		.asObservable()
		.pipe(distinctUntilChanged());

	changeColor(option: ColorOption): void {
		this.#selectedColor.next(option);
	}
}

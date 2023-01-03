import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { LetModule } from '@ngrx/component';
import { ProductPreviewComponent } from 'src/app/learn-threejs/lib';
import { BehaviorSubject, distinctUntilChanged } from 'rxjs';

type HexValue = `#${string}`;

interface ColorOption {
	label: string;
	value: HexValue;
}

@Component({
	standalone: true,
	selector: 'app-mug-editor',
	templateUrl: './mug-editor.component.html',
	styleUrls: ['./mug-editor.component.scss'],
	imports: [
		CommonModule,

		MatCardModule,
		MatDividerModule,
		ProductPreviewComponent,
		LetModule,
	]
})
export class MugEditorComponent { 
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

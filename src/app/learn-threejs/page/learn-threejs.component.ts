import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ProductPreviewComponent } from 'src/app/learn-threejs/lib';

@Component({
  standalone: true,
  selector: 'app-learn-threejs',
  templateUrl: './learn-threejs.component.html',
  styleUrls: ['./learn-threejs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [CommonModule, ProductPreviewComponent],
})
export class LearnThreejsComponent {}

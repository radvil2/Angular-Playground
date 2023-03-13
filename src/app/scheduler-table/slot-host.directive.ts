// import {
//   ComponentRef,
//   Directive,
//   Input,
//   Renderer2,
//   Type,
//   ViewContainerRef,
// } from '@angular/core';
// import { millisecondsToMinutes } from 'date-fns';
// import { ScheduleDefaultSlotComponent } from './scheduler-default-slot.component';
//
// const DEFAULT_SLOT_STYLES: { [klass: string]: any } = {
//   display: 'block',
//   position: 'absolute',
//   width: '100%',
//   overflow: 'hidden',
// };
//
// const HEIGHT_PER_MIN = 5;
//
// @Directive({
//   standalone: true,
//   selector: '[slot-host], [slotHost]',
// })
// export class SlotHostDirective {
//   #config: SlotConfig | null = null;
//
//   @Input()
//   component: any;
//
//   @Input()
//   set config(value: SlotConfig | null) {
//     this.#loadComponent(value);
//   }
//
//   get config() {
//     return this.#config;
//   }
//
//   componentRef?: ComponentRef<ScheduleDefaultSlotComponent>;
//
//   @Input()
//   set colDef(value: any) {
//     if (this.componentRef) {
//       this.componentRef.instance.columnDef = value;
//     }
//   }
//
//   #loadComponent(config: SlotConfig | null): void {
//     this.vcr.clear();
//     const slotComponent: Type<ColumnSlotComponent> =
//       config?.customComponent || ScheduleDefaultSlotComponent;
//     this.componentRef = this.vcr.createComponent<any>(slotComponent);
//     if (this.componentRef && config) {
//       this.componentRef.instance.data = config.data;
//       this.componentRef.instance.columnDef = this.colDef;
//       this.componentRef.instance.slotId = config.id;
//       this.#loadStyles(config);
//     }
//   }
//
//   get elementRef() {
//     return this.componentRef?.location;
//   }
//
//   #loadStyles(config: SlotConfig): void {
//     if (!this.componentRef || !this.elementRef?.nativeElement) return;
//
//     this.componentRef.instance.duration = config.heightInMs;
//
//     const styles = DEFAULT_SLOT_STYLES;
//
//     // calc top
//     const startingPos =
//       millisecondsToMinutes(config.topOffsetInMs) * HEIGHT_PER_MIN;
//     const totalGaps = startingPos / (HEIGHT_PER_MIN * 10);
//     styles['transform'] = `translate(0, ${startingPos + totalGaps}px)`;
//
//     // calc height
//     const durationInMin = millisecondsToMinutes(config.heightInMs);
//     const height = durationInMin * HEIGHT_PER_MIN;
//     const gapHeight = height / (HEIGHT_PER_MIN * 10);
//     styles['height'] = `${height + gapHeight}px`;
//
//     // apply styles at once
//     Object.entries(styles).forEach(([klass, value]) => {
//       this.rd.setStyle(this.elementRef!.nativeElement, klass, value);
//     });
//   }
//
//   constructor(readonly rd: Renderer2, readonly vcr: ViewContainerRef) {}
// }

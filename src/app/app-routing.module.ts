import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'learn-threejs',
    title: 'Learn Three JS',
    loadChildren: async () => {
      return (await import('./learn-threejs/page')).LearnThreeJSRoutes;
    },
  },
  {
    path: 'booking-schedule',
    title: 'Booking Schedule',
    loadComponent: async () => {
      return (await import('./pages/booking-list')).BookingListComponent;
    },
  },
  {
    path: '',
    redirectTo: 'booking-schedule',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

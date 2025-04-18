import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'purchase-order',
    loadComponent: () =>
      import('./components/purchase-order/purchase-order.component').then(
        (c) => c.PurchaseOrderComponent
      ),
  },
];

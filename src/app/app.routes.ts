import {
  Routes
} from '@angular/router';
import { NotFoundComponent } from './not-found';

export const ROUTES: Routes = [
  {
    path: '**',
    component: NotFoundComponent
  }
];

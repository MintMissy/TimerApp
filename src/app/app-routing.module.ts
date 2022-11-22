import { RouterModule, Routes } from '@angular/router';

import { NgModule } from '@angular/core';
import { TimerPageComponent } from './timer/feature/timer-page/timer-page.component';

const routes: Routes = [{ path: '', component: TimerPageComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

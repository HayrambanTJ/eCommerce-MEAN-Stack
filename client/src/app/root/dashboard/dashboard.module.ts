import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { CardModule } from '../../shared/modules/card/card.module';
import { DashboardService } from './dashboard.service';
import { MatProgressBarModule } from '@angular/material/progress-bar';


const routes: Routes = [
  {path: '', component: DashboardComponent}
];

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    MatProgressBarModule,
    RouterModule.forChild(routes),
    CardModule
  ],
  providers: [DashboardService]
})
export class DashboardModule { }

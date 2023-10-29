import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DialogsComponent } from './dialogs/dialogs.component';

const routes: Routes = [
  { path: 'dialogs', component: DialogsComponent },
  { path: '', redirectTo: '/dialogs', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

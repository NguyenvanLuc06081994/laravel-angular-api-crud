import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListComponent} from './students/list/list.component';
import {AddComponent} from './students/add/add.component';
import {EditComponent} from './students/edit/edit.component';

const routes: Routes = [
  {path: '', redirectTo: 'students', pathMatch: 'full'},
  {path: 'students', component: ListComponent},
  {path: 'students/add', component: AddComponent},
  {path: 'students/:id', component: EditComponent},
  {path: 'students/show/:id', component: EditComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './component/create/create.component';
import { EditComponent } from './component/edit/edit.component';
import { IndexComponent } from './component/index/index.component';
import { ViewComponent } from './component/view/view.component';

const routes: Routes = [  {path:'', component: IndexComponent},
                          {path:'create', component: CreateComponent},
                          {path:'view/:id', component:ViewComponent},
                          {path:'update/:id', component:EditComponent},
                          {path:'delete/:id', component:EditComponent}];

                      
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

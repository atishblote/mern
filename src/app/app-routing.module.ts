import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AngularFormComponent } from './components/angular-form/angular-form.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { ChildComponent } from './components/child/child.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { DataServiceComponent } from './components/data-service/data-service.component';
import { DirectivesComponent } from './components/directives/directives.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { ParentComponent } from './components/parent/parent.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { ChangeColorDirective } from './custom-directive/change-color.directive';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guard/auth.guard';


const routes: Routes = [
  { path: "" , component : LoginComponent,  },
  { path: "login" , component : LoginComponent },

  { path: "data-binding" , component : DataBindingComponent, canActivate:[AuthGuard] },
  { path: "parent" , component : ParentComponent, canActivate:[AuthGuard]  },
  { path: "child" , component : ChildComponent, canActivate:[AuthGuard]  },
  { path: "directives" , component : DirectivesComponent, canActivate:[AuthGuard]  },
  { path: "data-service" , component : DataServiceComponent, canActivate:[AuthGuard]  },
  { path: "crud" ,canActivate:[AuthGuard] , loadChildren: () => import('./crud/crud.module').then( (m) => m.CRUDModule ) },
  { path: "changeColor" , component : ChangeColorComponent , canActivate:[AuthGuard] },
  { path: "pipes/:id" , component : PipesComponent , canActivate:[AuthGuard] },
  { path: "comp2" , component : Comp2Component , canActivate:[AuthGuard] },
  { path: "angform" ,canActivate:[AuthGuard]  ,  component : AngularFormComponent , children: [
    { path: "utdf" , component : UtdfComponent ,canActivate:[AuthGuard]  },
    { path: "rtf" , component : RtfComponent , canActivate:[AuthGuard]  },

  ] },
  { path: "assignments" , component : AssignmentsComponent , canActivate:[AuthGuard]},
  { path: "material-ui" , component : MaterialUiComponent, canActivate:[AuthGuard] },
  { path: "**" , component : PageNotFoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

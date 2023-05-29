import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './components/data-binding/data-binding.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { DirectivesComponent } from './components/directives/directives.component';
import { AssignmentsComponent } from './components/assignments/assignments.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { GenderPipe } from './pipes/gender.pipe';
import { ParentToChildComponent } from './components/parent-to-child/parent-to-child.component';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { NavComponent } from './components/nav/nav.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UtdfComponent } from './components/utdf/utdf.component';
import { AngularFormComponent } from './components/angular-form/angular-form.component';
import { RtfComponent } from './components/rtf/rtf.component';
import { Comp1Component } from './components/comp1/comp1.component';
import { Comp2Component } from './components/comp2/comp2.component';
import { ChangeColorDirective } from './custom-directive/change-color.directive';
import { MyColorChangeComponent } from './components/my-color-change/my-color-change.component';
import { ChangeColorComponent } from './components/change-color/change-color.component';
import { DataServiceComponent } from './components/data-service/data-service.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialUiComponent } from './components/material-ui/material-ui.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { LoginComponent } from './components/login/login.component';



@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent,
    DirectivesComponent,
    AssignmentsComponent,
    PipesComponent,
    GenderPipe,
    ParentToChildComponent,
    ParentComponent,
    ChildComponent,
    NavComponent,
    PageNotFoundComponent,
    UtdfComponent,
    AngularFormComponent,
    RtfComponent,
    Comp1Component,
    Comp2Component,
    ChangeColorDirective,
    MyColorChangeComponent,
    ChangeColorComponent,
    DataServiceComponent,
    MaterialUiComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    FontAwesomeModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { SkillsComponent } from './skills/skills.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome/angular-font-awesome';
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'edu', component: EducationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  { path: 'skills', component: SkillsComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent,
    SkillsComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AngularFontAwesomeModule   ,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

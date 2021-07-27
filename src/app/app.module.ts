import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { WorkComponent } from './work/work.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

const appRoutes: Routes = [
  { path: 'edu', component: EducationComponent },
  { path: 'work', component: WorkComponent },
  { path: 'about', component: AboutComponent },
  // { path: 'skills', component: SkillsComponent },
  { path: '**', redirectTo: '/about'}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    EducationComponent,
    WorkComponent
  ],
  imports: [
    AngularFontAwesomeModule,
    BrowserModule,
    CommonModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

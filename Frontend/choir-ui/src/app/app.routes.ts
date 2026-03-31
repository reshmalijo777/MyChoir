import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
import { EventsComponent } from './pages/events/events.component';
import { JoinComponent } from './pages/join/join.component';
import { ContactComponent } from './pages/contact/contact.component';
import { MembersComponent } from './pages/members/members.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'schedule', component: ScheduleComponent },
  { path: 'events', component: EventsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'join', component: JoinComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

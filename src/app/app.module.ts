import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './Components/navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import { SidebarComponent } from './Components/sidebar/sidebar.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { ManagementComponent } from './Components/management/management.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { StaffComponent } from './Components/staff/staff.component';
import {CarouselComponent} from './Components/carousel/carousel.component';
import { EmploymentComponent } from './Components/employment/employment.component';
import { PerformanceComponent } from './Components/performance/performance.component';
import {MatCardModule} from '@angular/material/card';
import { ProfileDetailsComponent } from './Components/profile-details/profile-details.component';
import {MatRadioModule} from '@angular/material/radio';
import {MatDatepickerModule, MatDatepickerToggle} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { AddressComponent } from './Components/address/address.component';
import { EmploymentTermsComponent } from './Components/employment-terms/employment-terms.component';
import {MatSelectModule} from '@angular/material/select';
import { CarouselModule } from 'ngx-owl-carousel-o';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ManagementComponent,
    StaffComponent,
    CarouselComponent,
    EmploymentComponent,
    PerformanceComponent,
    ProfileDetailsComponent,
    AddressComponent,
    EmploymentTermsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule.forRoot([]),
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatSidenavModule,
    MatTabsModule,
    MatInputModule,
    MatCardModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSelectModule,
    CarouselModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

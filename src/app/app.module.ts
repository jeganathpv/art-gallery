import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { ArtViewComponent } from './art-view/art-view.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { HeaderComponent } from './shared/header/header.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ApiArtService } from './api-art.service';
import { HttpClientModule } from '@angular/common/http';
import { SidebarModule } from 'primeng/sidebar';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { NgxMasonryModule } from 'ngx-masonry';
import { FilterModalComponent } from './filter-modal/filter-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    GalleryListComponent,
    ArtViewComponent,
    ArtDetailComponent,
    HeaderComponent,
    HomepageComponent,
    FilterModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    SidebarModule,
    NgxMasonryModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [
    ApiArtService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

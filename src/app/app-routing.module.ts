import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GalleryListComponent } from './gallery-list/gallery-list.component';
import { ArtViewComponent } from './art-view/art-view.component';
import { ArtDetailComponent } from './art-detail/art-detail.component';
import { HomepageComponent } from './homepage/homepage.component';

const routes: Routes = [
  {
    path: '',
    component: HomepageComponent
  },
  {
    path: 'gallery',
    component: GalleryListComponent
  },
  {
    path: 'gallery/:id',
    component: ArtDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

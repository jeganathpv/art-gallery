import { Component, ViewChild } from '@angular/core';
// import { IArtInfo } from '../models';
import { ApiArtService } from '../api-art.service';
import { IArtInfo } from '../models';
import { FilterModalComponent } from '../filter-modal/filter-modal.component';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent {

  artworks: any[] = [];
  filteredArtworks: any[] = [];
  selectedArtwork?: IArtInfo;
  sidebarVisible: boolean = false;
  searchQuery: string = '';


  @ViewChild(FilterModalComponent) filterModal?: FilterModalComponent;



  constructor(
    private artSvc: ApiArtService
  ) {}

  openDetails(artwork: any) {
    this.selectedArtwork = {
      id: artwork.object.objectid,
      title: artwork.object.title,
      artist: artwork.object.attribution,
      imageUrl: artwork.published_image.iiifthumburl.replace('200,200', '500,500'),
      thumbnailUrl: artwork.published_image.iiifthumburl,
      overview: artwork.object.provenancetext,
      releaseDate: new Date(artwork.object.lastdetectedmodification),
    };
    this.sidebarVisible = true;
  }

  closeDetails() {
    this.selectedArtwork = undefined;
    this.sidebarVisible = false;
  }

  searchArtworks() {

    if (!this.searchQuery || this.searchQuery.trim() === '') {
      return;
    }
    let query = this.searchQuery.toLowerCase();


    let localStorageItem = localStorage.getItem('searchHistory');
    let searchHistory: string[] = localStorageItem ? JSON.parse(localStorageItem) : [];

    if (!searchHistory.includes(query)) {
      searchHistory.push(query);
      localStorage.setItem('searchHistory', JSON.stringify(searchHistory));
    }

  }









  ngOnInit(): void {
    this.artSvc.getArtworks().subscribe(data => {
      this.artworks = data;
      this.filteredArtworks = data;
    });
  }
  openFilterModal(): void {
    this.filterModal?.showDialog();
  }

  applyFilters(filterCriteria: any): void {
    this.filteredArtworks = this.artworks.filter(artwork => {
      let matches = true;
      if (filterCriteria.title) {
        matches = matches && artwork.object.title.toLowerCase().includes(filterCriteria.title.toLowerCase());
      }
      if (filterCriteria.artist) {
        matches = matches && artwork.object.attribution.toLowerCase().includes(filterCriteria.artist.toLowerCase());
      }
      if (filterCriteria.classification) {
        matches = matches && artwork.object.classification.toLowerCase().includes(filterCriteria.classification.toLowerCase());
      }
      if (filterCriteria.yearRange) {
        const [startYear, endYear] = filterCriteria.yearRange.split('-').map(Number);
        matches = matches && artwork.object.beginyear >= startYear && artwork.object.endyear <= endYear;
      }
      return matches;
    });
  }
}


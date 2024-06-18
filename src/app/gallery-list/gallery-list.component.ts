import { Component } from '@angular/core';
// import { IArtInfo } from '../models';
import { ApiArtService } from '../api-art.service';
import { IArtInfo } from '../models';

@Component({
  selector: 'app-gallery-list',
  templateUrl: './gallery-list.component.html',
  styleUrls: ['./gallery-list.component.scss'],
})
export class GalleryListComponent {
  // readonly artworks: IArtInfo[] =[
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  //   {
  //     id: "1",
  //     imageUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     thumbnailUrl: "https://www.museoreinasofia.es/sites/default/files/obras/DE00050_0.jpg",
  //     title: "Starry Night",
  //     artist: "Vincent van Gogh",
  //     overview: "A swirling depiction of the night sky over a quiet town.",
  //     releaseDate: new Date(1889, 6, 1)
  //   },
  // ]

  artworks: any[] = [];
  selectedArtwork?: IArtInfo;
  sidebarVisible: boolean = false;

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



  constructor(
    private artSvc: ApiArtService
  ) {}

  ngOnInit(): void {
    this.artSvc.getArtworks().subscribe(data => {
      this.artworks = data;
    });
  }
}


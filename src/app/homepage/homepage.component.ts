import { Component } from '@angular/core';
import { ApiArtService } from '../api-art.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {
  featuredArtworks: any[] = [];

  recentPosts: any[] = [
    {
      title: 'New Exhibit: Modern Art',
      excerpt: 'Discover our latest exhibit featuring modern art from the 20th century...',
      link: '#'
    },
    {
      title: 'Artist Spotlight: Jane Doe',
      excerpt: 'Learn more about the life and work of Jane Doe, a contemporary artist known for...',
      link: '#'
    }
  ];
  constructor(private artSvc: ApiArtService) {}

  ngOnInit(): void {
    this.artSvc.getArtworks().subscribe(data => {
      const shuffled = data.sort(() => 0.5 - Math.random());
      this.featuredArtworks = shuffled.slice(0, 3); 
    });
  }
}

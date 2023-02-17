import { Component } from '@angular/core';

@Component({
  selector: 'app-list-film',
  templateUrl: './list-film.component.html',
  styleUrls: ['./list-film.component.css']
})
export class ListFilmComponent {
  showMovies = true
  cacheList() {
    return this.showMovies ? (this.showMovies = false) : (this.showMovies = true);
  }
}

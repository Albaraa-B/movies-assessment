import { Component, OnInit } from '@angular/core';
import {Movie} from '../movie'
import {MovieService} from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  movie: Movie = {
    id: 1,
    title: 'Test',
    json_info: {}
  }
  status_code = 0;
  arr;
  json;

  latest: Movie;

  get_movie(id){
    this.movie_service.get_movie(id).subscribe(json_info => this.movie = {
      id: id,
      name: json_info['title'],
      json_info: json_info
    });
    this.arr = Object.keys(this.movie.json_info);
    status = this.movie.json_info['status_code']
  }

  get_latest(){
    this.movie_service.get_latest().subscribe(latest => this.latest = latest);
    console.log(this.latest.name);
  }
  
  constructor(private movie_service:MovieService) {}

  ngOnInit() {
    this.get_movie(550);
    this.get_latest();
  }



}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Movie} from './movie';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class MovieService {
  static base_url = 'https://api.themoviedb.org/3/'
  static api_key = 'b105dbabeeabdf41bafb40b2dc0dfea7'


  constructor(private http: HttpClient) { }

  get_movie(id): Observable<Object>{
    return this.http.get(MovieService.base_url+'movie/'+id+'?api_key='+MovieService.api_key);
  }

  

  get_latest(): Observable<Object>{
    console.log(this.http.get(MovieService.base_url+'movie/latest'+'?api_key='+MovieService.api_key));
    return this.http.get(MovieService.base_url+'movie/latest'+'?api_key='+MovieService.api_key);
  }

}

import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  configUrl = 'http://localhost:8080/navigation/top-navigation';

  constructor(private http: HttpClient) {
  }

  getMenuConfig() {
    return this.http.get('http://localhost:8080/navigation/top-navigation');
  }
}

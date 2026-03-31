import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JoinService {

  private apiUrl = 'http://localhost:5091/api/join';

  constructor(private http: HttpClient) { }

  join(data: any) {
    return this.http.post(this.apiUrl, data);
  }
  getMembers() {
    return this.http.get<any[]>(this.apiUrl);
  }
}

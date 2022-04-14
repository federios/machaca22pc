import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SubscribeService {
  mailChimpEndpoint = 'https://machaca.us17.list-manage.com/subscribe/postjson?u=1371452fb2d00fbd41d946ce4&id=21b55d7b2b';
  modalCount = 0;

  constructor(
    private http: HttpClient
  ) { }

  subscribeToList(data: { firstName: string | number | boolean; email: string | number | boolean; }) {
    const params = new HttpParams()
      .set('FNAME', data.firstName)
      .set('EMAIL', data.email)
      .set('group[9787][2]', 'true')
      .set('1_1371452fb2d00fbd41d946ce4_21b55d7b2b', '');
    const mailChimpUrl = `${this.mailChimpEndpoint}&${params.toString()}`;
    return this.http.jsonp(mailChimpUrl, 'c')
  }
}

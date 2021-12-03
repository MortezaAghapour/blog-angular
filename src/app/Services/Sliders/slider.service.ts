import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GET_SLIDERS_API_NAME } from 'src/app/Consts/api.const';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';

export const headerOption = {
  headers: new HttpHeaders({
    'Content-Types': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SliderService {
  constructor(private httpClient: HttpClient) {}

  public getSliders(): Observable<ResultDto> {
    return this.httpClient.get<ResultDto>(GET_SLIDERS_API_NAME, headerOption);
  }
}

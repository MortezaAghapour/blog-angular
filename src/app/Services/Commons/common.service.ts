import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { LOGO_API_NAME, TOP_OF_SITE_API_NAME } from 'src/app/Consts/api.const';

export const headerOption ={
  headers:new HttpHeaders({
    'Content-Types':'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class CommonService {
  constructor(private httpClient:HttpClient) {}

  public getTopOfSiteInfo():Observable<ResultDto>{
     return this.httpClient.get<ResultDto>(TOP_OF_SITE_API_NAME,headerOption);
  }
  public getLogo():Observable<ResultDto> {
    return this.httpClient.get<ResultDto>(LOGO_API_NAME,headerOption);
  }
}

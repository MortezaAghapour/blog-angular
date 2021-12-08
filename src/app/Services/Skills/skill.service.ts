import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GET_SKILLS_API_NAME,
  GET_SKILL_TEXT_API_NAME,
} from 'src/app/Consts/api.const';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';

export const headerOption = {
  headers: new HttpHeaders({
    'Content-Types': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  constructor(private httpClient: HttpClient) {}

  public getSkills(): Observable<ResultDto> {
    return this.httpClient.get<ResultDto>(GET_SKILLS_API_NAME, headerOption);
  }
  public getSkillText(): Observable<ResultDto> {
    return this.httpClient.get<ResultDto>(
      GET_SKILL_TEXT_API_NAME,
      headerOption
    );
  }
}

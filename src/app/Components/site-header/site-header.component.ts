import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogoDto } from 'src/app/Models/Commons/logoDto.model';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { CommonService } from 'src/app/Services/Commons/common.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
})
export class SiteHeaderComponent implements OnInit {
  logoModel!: LogoDto;
  constructor(private commonService: CommonService) {}

  ngOnInit(): void {
    this.commonService.getLogo().subscribe((response: ResultDto) => {
      if (response.isSuccess) {
        this.logoModel = Object.assign(new LogoDto(), response.data);
      }
    });
  }
}

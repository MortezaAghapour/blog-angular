import { Component, OnInit } from '@angular/core';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { TopOfSiteDto } from 'src/app/Models/Commons/topOfSiteDto.model';
import { CommonService } from 'src/app/Services/Commons/common.service';

@Component({
  selector: 'app-top-of-site',
  templateUrl: './top-of-site.component.html',
  styleUrls: ['./top-of-site.component.css'],
})
export class TopOfSiteComponent implements OnInit {
  constructor(private commonService: CommonService) {}
  topOfSiteModel!: TopOfSiteDto;

  ngOnInit(): void {
    this.commonService.getTopOfSiteInfo().subscribe((response: ResultDto) => {
      if (response.isSuccess) {
        this.topOfSiteModel = Object.assign(new TopOfSiteDto(), response.data);
        // this.topOfSiteModel.email = response.data.email;
        // this.topOfSiteModel.mobileNumber = response.data.mobileNumber;
      }
    });
  }
}

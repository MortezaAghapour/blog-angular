import { Component, OnInit } from '@angular/core';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { SliderDto } from 'src/app/Models/Sliders/sliderDto.model';
import { SliderService } from 'src/app/Services/Sliders/slider.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css'],
})
export class SliderComponent implements OnInit {
  sliders!: SliderDto[];
  constructor(private sliderService: SliderService) {}

  ngOnInit(): void {
    this.sliderService.getSliders().subscribe((response: ResultDto) => {
      if (response.isSuccess) {
        this.sliders = Object.assign(new SliderDto(), response.data);
      }
    });
  }
}

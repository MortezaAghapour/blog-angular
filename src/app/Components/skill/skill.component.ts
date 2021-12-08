import { Component, OnInit } from '@angular/core';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { SkillDto } from 'src/app/Models/Skills/skillDto.model';
import { SkillService } from 'src/app/Services/Skills/skill.service';

@Component({
  selector: 'app-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.css'],
})
export class SkillComponent implements OnInit {
  skills!: SkillDto[];

  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((response: ResultDto) => {
      if (response.isSuccess) {
        this.skills = Object.assign(new SkillDto(), response.data);
      }
    });
  }
}

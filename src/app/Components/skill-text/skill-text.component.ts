import { Component, OnInit } from '@angular/core';
import { ResultDto } from 'src/app/Models/Commons/resultDto.model';
import { SkillTextDto } from 'src/app/Models/Skills/skillTextDto.model';
import { SkillService } from 'src/app/Services/Skills/skill.service';

@Component({
  selector: 'app-skill-text',
  templateUrl: './skill-text.component.html',
  styleUrls: ['./skill-text.component.css'],
})
export class SkillTextComponent implements OnInit {
  skillContent!: SkillTextDto;
  constructor(private skillService: SkillService) {}

  ngOnInit(): void {
    this.skillService.getSkills().subscribe((response: ResultDto) => {
      if (response.isSuccess) {
        this.skillContent = Object.assign(new SkillTextDto(), response.data);
      }
    });
  }
}

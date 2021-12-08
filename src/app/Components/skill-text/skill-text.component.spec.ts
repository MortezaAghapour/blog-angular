import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkillTextComponent } from './skill-text.component';

describe('SkillTextComponent', () => {
  let component: SkillTextComponent;
  let fixture: ComponentFixture<SkillTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkillTextComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkillTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

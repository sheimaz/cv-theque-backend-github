import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CertificationEntity } from './certification.entity';
import { LanguageEntity } from './language.entity';
import { ProfessionalexperienceEntity } from './professionalexperience.entity';
import { ProjectEntity } from './project.entity';
import { PsychoEntity } from './psycho.entity';
import { SkillEntity } from './skill.entity';
import { UserEntity } from './user.entity';

@Entity('cvs')
export class CvEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @OneToOne(() => UserEntity, (user) => user.cvs)
  user: UserEntity;
  @Column()
  userId: number;
  // @Column()
  // name: string;
  // @Column()
  // job: string;
  @OneToMany(() => CvEntity, (cv) => cv.skill)
  skill: SkillEntity;
  @OneToMany(() => CvEntity, (cv) => cv.language)
  language: LanguageEntity;
  @OneToMany(() => CvEntity, (cv) => cv.certification)
  certification: CertificationEntity;

  @OneToMany(() => CvEntity, (cv) => cv.psycho)
  psycho: PsychoEntity;

  @OneToMany(() => CvEntity, (cv) => cv.project)
  project: ProjectEntity;

  @OneToMany(() => CvEntity, (cv) => cv.professionalexperience)
  professionalexperience: ProfessionalexperienceEntity;
}

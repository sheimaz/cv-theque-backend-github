import {
  Column,
  Entity,
  ManyToMany,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CvEntity } from './cv.entity';
import { DepartementEntity } from './departement.entity';
import { UserEntity } from './user.entity';

@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  dateStart: string;
  @Column()
  business: string;
  @Column()
  dateEnd: string;
  @ManyToOne(() => CvEntity, (cv) => cv.project)
  cv: CvEntity;
  @ManyToMany(() => UserEntity, (user) => user.project)
  user: UserEntity;
  @Column()
  type: ProjectType;
  @Column()
  secteur: Departement;
}
export enum ProjectStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED',
}
export enum ProjectType {
  WEB = 'Web',
  MOBILE = 'Mobile',
  DESKTOP = 'Desktop',
}
export enum Departement {
  DIGIX = 'DIGIX',
  BEST = 'BEST',
  CAO = 'CAO',
  ADMINISTRATION = 'ADMINISTRATION',
  FINLAB = 'FINLAB',
  FSI = 'FSI',
  MARKETING_SALES = 'MARKETING_SALES',
  PMO = 'PMO',
  PROXYMFRANCE = 'PROXYMFRANCE',
  PROXYM_U = 'PROXYM_U',
  QA = 'QA',
  RH = 'RH',
  SI_Integration = 'SI_Integration',
  SUPPORT_CLIENT = 'SUPPORT_CLIENT',
  TGO = 'TGO',
  VALOMNIA = 'VALOMNIA',
}

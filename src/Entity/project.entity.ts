import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('projects')
export class ProjectEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  title: string;
  @Column()
  description: string;
  @Column()
  date: string;
  @Column()
  status: ProjectStatus;
  @ManyToOne(() => CvEntity, (cv) => cv.project)
  cv: CvEntity;
}
export enum ProjectStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED'
}
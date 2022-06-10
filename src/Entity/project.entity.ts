import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";
import { UserEntity } from "./user.entity";


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
  @ManyToMany(() => UserEntity, (user) => user.project)
  user: UserEntity;
}
export enum ProjectStatus {
  OPEN = 'OPEN',
  WIP = 'WIP',
  COMPLETED = 'COMPLETED'
}
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('skill')
export class SkillEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  rating: number;
  @Column()
  experiencetechnique: string[]
  @ManyToOne(() => CvEntity, (cv) => cv.skill)
  cv: CvEntity;
}



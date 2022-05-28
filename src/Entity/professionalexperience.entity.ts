import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('professionalexperience')
export class ProfessionalexperienceEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  rating: number;
  @ManyToOne(() => CvEntity, (cv) => cv.professionalexperience)
  cv: CvEntity;

}



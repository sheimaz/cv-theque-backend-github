import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('language')
export class LanguageEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  rating: number;
  @ManyToOne(() => CvEntity, (cv) => cv.language)
  cv: CvEntity;
}



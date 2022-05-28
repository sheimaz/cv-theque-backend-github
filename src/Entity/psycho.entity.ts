import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('psycho')
export class PsychoEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  rating: number;
  @ManyToOne(() => CvEntity, (cv) => cv.psycho)
  cv: CvEntity;

}



import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { CvEntity } from "./cv.entity";


@Entity('certification')
export class CertificationEntity {

  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  rating: number;
  @ManyToOne(() => CvEntity, (cv) => cv.certification)
  cv: CvEntity;


}



import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity('departement')
export class DepartementEntity {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  description: string;

}

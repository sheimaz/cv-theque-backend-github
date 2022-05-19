import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import * as bcrypt from 'bcryptjs';
import { CvEntity } from "./cv.entity";
import { DepartementController } from "src/departement/departement.controller";

export enum UserRole {
  COLLABORATEUR = 'Collaborateur',
  ADMIN = 'Admin',
  RESPONSABLEPOLE='ResponsablePole',
  TEAMLEAD='TeamLead'

} 
export enum Departement {
    DIGIX= 'DIGIX',
    BEST='BEST',
    CAO='CAO',
    ADMINISTRATION='ADMINISTRATION',
    FINLAB='FINLAB',
    FSI='FSI',
    MARKETING_SALES='MARKETING_SALES',
    PMO='PMO',
    PROXYMFRANCE='PROXYMFRANCE',
    PROXYM_U='PROXYM_U',
    QA='QA',
    RH='RH',
    SI_Integration='SI_Integration',
    SUPPORT_CLIENT='SUPPORT_CLIENT',
    TGO='TGO',
    VALOMNIA='VALOMNIA'
}

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  username: string;

  @Column()
  password: string;
  
  @Column()
  job: string;
  @Column()
  email: string;

  @Column({type: 'enum', enum: UserRole, default: UserRole.COLLABORATEUR})
    role: UserRole;

  @OneToMany(() => CvEntity, (cv) => cv.user )
  cvs: CvEntity[]
  
  @Column({type: 'enum', enum: Departement, default: Departement.DIGIX})
  departement: Departement;
  
}


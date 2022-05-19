import { Module } from '@nestjs/common';
import { TypeOrmModule } from "@nestjs/typeorm";
import { DepartementEntity } from 'src/Entity/departement.entity';

import { AuthModule } from "../auth/auth.module";
import { DepartementController } from './departement.controller';
import { DepartementService } from './departement.service';


@Module({
  imports: [
   TypeOrmModule.forFeature([DepartementEntity]),
   AuthModule],
  controllers: [DepartementController],
  providers: [DepartementService]
})
export class DepartementModule {}

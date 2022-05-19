import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { UserEntity } from "../Entity/user.entity";
import { AuthModule } from 'src/auth/auth.module';

@Module({
 imports: [
    TypeOrmModule.forFeature([UserEntity]),
    AuthModule
      ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule {}

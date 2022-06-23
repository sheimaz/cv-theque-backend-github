import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity, UserRole } from '../Entity/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
  ) {}

  async getAllUsers(user: UserEntity) {
    //
    if (user.role == UserRole.ADMIN || user.role == UserRole.RESPONSABLEPOLE) {
      return await this.repo.find();
    } else {
      throw new UnauthorizedException('Not authorized');
    }
  }
  async update(user: UserEntity) {
    return await this.repo.update(user.id, user);
  }

  /**async createUser(username: string, job: string, password: string){
    const user = new UserEntity();
    user.username = username;
    user.password = password;
    user.job=job;
    user.role = UserRole.USER;

    this.repo.create(user);
    return await this.repo.save(user);
  }**/

  async delete(id: number): Promise<{ success: boolean }> {
    const result = await this.repo.delete(id);

    if (result.affected === 0) {
      throw new NotFoundException('User not deleted');
    } else {
      return { success: true };
    }
  }
}

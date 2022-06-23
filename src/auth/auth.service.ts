import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  BadRequestException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../Entity/user.entity';
import { Repository } from 'typeorm';
import { RegisterUserDto } from '../DTO/registerUser.dto';
import * as bcrypt from 'bcryptjs';
import { UserLoginDto } from '../DTO/userLogin.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(UserEntity) private repo: Repository<UserEntity>,
    private jwt: JwtService,
  ) {}

  async registerUser(registerDTO: RegisterUserDto) {
    const { username, password, role, job, departement, email } = registerDTO;
    const hashed = await bcrypt.hash(password, 12);
    const salt = await bcrypt.getSalt(hashed);

    const foundUser = await this.repo.findOne({ username });

    if (foundUser) {
      throw new BadRequestException();
    }

    const user = new UserEntity();
    user.email = email;
    user.username = username;
    user.password = hashed;
    user.role = role;
    user.departement = departement;
    user.job = job;

    this.repo.create(user);
    console.log('User #' + JSON.stringify(user));
    try {
      return await this.repo.save(user);
    } catch (err) {
      throw new InternalServerErrorException(
        'Something went wrong, user was not created.' + err,
      );
    }
  }

  async loginUser(userLoginDTO: UserLoginDto) {
    const { username, password } = userLoginDTO;

    const user = await this.repo.findOne({ username });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials.');
    }

    const isPasswordMatch = await bcrypt.compare(password, user.password);

    if (isPasswordMatch) {
      const jwtPayload = { username };
      const jwtToken = await this.jwt.signAsync(jwtPayload, {
        expiresIn: '1d',
        algorithm: 'HS512',
      });
      return { token: jwtToken, role: user.role };
    } else {
      throw new UnauthorizedException('Invalid credentials.');
    }
  }
}

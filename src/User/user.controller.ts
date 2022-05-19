import { Controller, Get, Post, Body, ValidationPipe, Inject, Delete, Param, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { RegisterUserDto } from "../DTO/registerUser.dto";
import { AuthService } from 'src/auth/auth.service';
import { AuthGuard } from "@nestjs/passport";
import { UserRole } from 'src/Entity/user.entity';

// http://localhost:3000/users
@Controller('users')
@UseGuards(AuthGuard())
export class UserController {
    @Inject(AuthService)
    private authService: AuthService;


    constructor(private userService: UserService) {}

    // http GET verb
    @Get()
    getAllUsers() {
      // console.log(this.userService.getAllUsers());
      return this.userService.getAllUsers();
    }
    
   // http POST verb
    @Post()
  registration(@Body(ValidationPipe) regDTO: RegisterUserDto) {
    return this.authService.registerUser(regDTO);
  }
  
  @Delete(":id")
  deleteUser(@Param("id") id: number): any {
      return this.userService.delete(id);
    }

}
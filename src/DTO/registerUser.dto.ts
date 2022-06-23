import { IsNotEmpty, Matches, MaxLength, MinLength } from 'class-validator';
import { Departement, UserRole } from 'src/Entity/user.entity';

export class RegisterUserDto {
  @IsNotEmpty()
  username: string;
  @IsNotEmpty()
  email: string;
  @IsNotEmpty()
  @MinLength(6)
  @MaxLength(12)
  @Matches(/(?:(?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/, {
    message:
      'Password is too weak, choose a stronger password between 6 and 12 characters',
  })
  password: string;
  @IsNotEmpty()
  @IsNotEmpty()
  job: string;
  @IsNotEmpty()
  @Matches(/Collaborateur|Admin|TeamLead|ResponsablePole/, {
    message: 'Role does not exist',
  })
  role: UserRole;
  @IsNotEmpty()
  @Matches(
    /DIGIX|BEST|CAO|ADMINISTRATION|FINLAB|FSI|MARKETING_SALES|PMO|PROXYMFRANCE|PROXYM_U|QA|RH|SI_Integration|SUPPORT_CLIENT|TGO=|VALOMNIA/,
    {
      message: 'Deapartement does not exist',
    },
  )
  departement: Departement;
}

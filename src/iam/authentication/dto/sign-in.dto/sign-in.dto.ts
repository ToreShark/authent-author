import { IsPhoneNumber, MinLength } from 'class-validator';

export class SignInDto {
  @IsPhoneNumber('KZ')
  phone: string;

  @MinLength(10)
  password: string;
}

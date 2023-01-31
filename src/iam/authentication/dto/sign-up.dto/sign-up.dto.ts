import { IsPhoneNumber, MinLength } from 'class-validator';

export class SignUpDto {
  @IsPhoneNumber('KZ')
  phone: string;

  @MinLength(10)
  password: string;
}

import { Role } from 'src/users/enums/role.enum';

export interface ActiveUserData {
  sub: number;

  phone: string;

  role: Role;
}

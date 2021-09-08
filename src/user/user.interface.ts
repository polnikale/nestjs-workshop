import { Transform } from 'class-transformer';
import { IsString, Max, Min } from 'class-validator';

export interface IUser {
  id: string;

  firstName: string;
  lastName: string;
  age?: number;
  createdAt?: string;
}

export class CreateUserDTO {
  @IsString()
  firstName: string;

  @IsString()
  lastName: string;

  @Transform(({ value }) => Number(value))
  @Min(0)
  @Max(20)
  age?: number;
}

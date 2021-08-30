export interface IUser {
  id: string;

  firstName: string;
  lastName: string;
  age?: number;

  createdAt: Date;
}

export interface ICreateUser {
  firstName: string;
  lastName: string;
  age?: string;
}

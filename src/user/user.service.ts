import { Inject, Injectable, Logger } from '@nestjs/common';
import { CreateUserDTO, IUser } from './user.interface';

export interface ProviderInterface {
  user: {
    findMany: () => Promise<IUser[]>;
    create: ({ data }: { data: CreateUserDTO }) => Promise<IUser | undefined>;
  };
}

@Injectable()
export class UserService {
  constructor(
    private readonly logger: Logger,
    @Inject('PROVIDER') private readonly provider: ProviderInterface,
  ) {}

  public getUsers() {
    this.logger.log(`Getting users`);

    return this.provider.user.findMany();
  }

  public createUser(data: CreateUserDTO) {
    this.logger.log(`Creating users ${JSON.stringify(data)}`);

    return this.provider.user.create({ data });
  }
}

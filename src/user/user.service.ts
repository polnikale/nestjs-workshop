import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ICreateUser } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('provider') private provider: PrismaService,
    private logger: Logger,
  ) {
    this.logger.log(`Init`);
  }

  public async getUsers() {
    this.logger.log(`Getting users`);
    return await this.provider.user.findMany();
  }

  public async getUser(id: string) {
    this.logger.log(`Getting user ${id}`);
    return await this.provider.user.findUnique({ where: { id } });
  }

  public async updateUser(id: string, data: ICreateUser) {
    this.logger.log('Updating');
    return await this.provider.user.update({
      where: { id },
      data: { ...data, age: data.age ? Number(data.age) : null },
    });
  }

  public async createUser(data: ICreateUser) {
    this.logger.log('Creating');
    return await this.provider.user.create({
      data: { ...data, age: data.age ? Number(data.age) : null },
    });
  }
}

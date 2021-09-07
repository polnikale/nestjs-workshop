import { Inject, Injectable, Logger } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateUserDTO } from './user.interface';

@Injectable()
export class UserService {
  constructor(
    @Inject('provider') private provider: PrismaService,
    private logger: Logger,
  ) {
    this.logger.log(`Init ${JSON.stringify(this.provider)}`);
  }

  public async getUsers() {
    const users = await this.provider.user.findMany();
    return users;
  }

  public async getUser(id: string) {
    this.logger.log(`Getting user ${id}`);
    return await this.provider.user.findUnique({ where: { id } });
  }

  public async updateUser(id: string, data: CreateUserDTO) {
    this.logger.log('Updating');
    return await this.provider.user.update({
      where: { id },
      data,
    });
  }

  public async createUser(data: CreateUserDTO) {
    this.logger.log('Creating');
    return await this.provider.user.create({
      data,
    });
  }
}

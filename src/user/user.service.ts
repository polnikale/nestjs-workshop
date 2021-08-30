import { Injectable, LoggerService } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { ICreateUser, IUser } from './user.interface';

@Injectable()
export class AppService {
  constructor(private prisma: PrismaService, private logger: LoggerService) {
    this.logger.log(`Init`);
  }

  public async getUsers() {
    this.logger.log(`Getting users`);
    return await this.prisma.user.findMany();
  }

  public async getUser(id: string) {
    this.logger.log(`Getting user ${id}`);
    return await this.prisma.user.findUnique({ where: { id } });
  }

  public async updateUser(id: string, data: IUser) {
    this.logger.log('Updating');
    return await this.prisma.user.update({ where: { id }, data });
  }

  public async createUser(data: ICreateUser) {
    this.logger.log('Creating');
    return this.prisma.user.create({ data });
  }
}

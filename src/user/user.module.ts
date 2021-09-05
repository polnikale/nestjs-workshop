import { Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    { provide: 'provider', useClass: PrismaService },
    // PrismaService,
    UserService,
  ],
})
export class UserModule {}

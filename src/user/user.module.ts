import { Logger, Module } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { SpreadsheetService } from '../spreadsheet.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    UserService,
    Logger,
    {
      provide: 'PROVIDER',
      useValue: new SpreadsheetService(
        '1pu5Nua7KZ47WniWxOG-aVnLm7mmf9wyhvKRje1mxVYk',
      ),
    },
  ],
})
export class UserModule {}

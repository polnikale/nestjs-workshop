import { Module } from '@nestjs/common';
import { SpreadsheetService } from '../spreadsheet.service';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [
    {
      provide: 'provider',
      useValue: new SpreadsheetService(
        '1pu5Nua7KZ47WniWxOG-aVnLm7mmf9wyhvKRje1mxVYk',
      ),
    },
    UserService,
  ],
})
export class UserModule {}

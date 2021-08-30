import { Global, Logger, Module } from '@nestjs/common';
import { PrismaService } from './prisma.service';
import { UserModule } from './user/user.module';

@Global()
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [PrismaService, Logger],
  exports: [PrismaService, Logger],
})
export class AppModule {}

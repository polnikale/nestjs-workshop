import { Global, Logger, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Global()
@Module({
  imports: [UserModule],
  controllers: [],
  providers: [Logger],
  exports: [Logger],
})
export class AppModule {}

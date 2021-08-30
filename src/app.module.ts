import { Global, Logger, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Global()
@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, Logger],
  exports: [Logger],
})
export class AppModule {}

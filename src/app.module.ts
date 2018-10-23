import { Module } from '@nestjs/common';
import { AppController } from './example/app.controller';
import { AppService } from './example/app.service';
// user module
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

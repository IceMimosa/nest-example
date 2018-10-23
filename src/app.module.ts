import { Module } from '@nestjs/common';
import { AppController } from './example/app.controller';
import { AppService } from './example/app.service';
// common module
import { MysqlModule } from './common/mysql.module';
// user module
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MysqlModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { AppController } from './example/app.controller';
import { AppService } from './example/app.service';
// common module
import { ExampleModule } from 'example/example.module';
import { MysqlModule } from './common/mysql.module';
// user module
import { UserModule } from './user/user.module';

@Module({
  imports: [
    MysqlModule,
    UserModule,
    ExampleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}

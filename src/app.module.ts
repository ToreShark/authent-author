import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DocsModule } from './docs/docs.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [DocsModule, UsersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

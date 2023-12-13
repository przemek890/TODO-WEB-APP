import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './modules/todo/todo.module';
import { PrismaModule } from './modules/prisma/prisma.module';

@Module({
  imports: [TodoModule, PrismaModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

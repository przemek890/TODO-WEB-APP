import { Module } from '@nestjs/common';
import { CalController } from './cal.controller';
import { CalService } from './cal.service';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [CalController],
  providers: [CalService],
  imports: [PrismaModule],
})
export class CalModule {}

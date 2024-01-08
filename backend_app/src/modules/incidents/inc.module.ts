import { Module } from '@nestjs/common';
import { IncController } from './inc.controller';
import { IncService } from './inc.service';
import {PrismaModule} from "../prisma/prisma.module";

@Module({
  controllers: [IncController],
  providers: [IncService],
  imports: [PrismaModule],
})
export class IncModule {}

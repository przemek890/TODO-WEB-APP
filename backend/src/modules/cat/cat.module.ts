import { Module } from '@nestjs/common';

import {PrismaModule} from "../prisma/prisma.module";
import {CatController} from "./cat.controller";
import {CatService} from "./cat.service";

@Module({
    controllers: [CatController],
    providers: [CatService],
    imports: [PrismaModule],
})
export class CatModule {}
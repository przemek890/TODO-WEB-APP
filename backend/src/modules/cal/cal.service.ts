import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateCalDto} from "./dto/create-cal.dto";

@Injectable()
export class CalService {
    constructor(private readonly prisma: PrismaService) {
    }
    async listCal(userId: number) {
        const history = await this.prisma.calculatorHistory.findMany({
            where: {
                userId: userId,
            },
            orderBy: {
                id: 'desc',
            },
            take: 1,
        });

        return history[0];
    }
    async addCal(data: CreateCalDto, userid: number) {
        return this.prisma.calculatorHistory.create({
            data: {
                history: data.history,
                userId: userid,
            }
        });
    }

    deleteCals(userid: number){
        return this.prisma.calculatorHistory.deleteMany({
            where: {
                userId: userid,
            }
        })
    }
}

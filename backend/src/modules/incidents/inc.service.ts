import { Injectable } from '@nestjs/common';
import {CreateCatDto} from "../cat/dto/create-cat.dto";
import {PrismaService} from "../prisma/prisma.service";
import {CreateIncidentDto} from "./dto/create-incidents";

@Injectable()
export class IncService {
    constructor(private readonly prisma: PrismaService) {}

    async addincident(data: CreateIncidentDto) {
        return this.prisma.incident.create({
            data: {
                email: data.email,
                description: data.description,
            }
        });
    }
}

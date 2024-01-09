import { Injectable } from '@nestjs/common';
import {CreateCalDto} from "../cal/dto/create-cal.dto";
import {PrismaService} from "../prisma/prisma.service";
import {CreateCatDto} from "./dto/create-cat.dto";

@Injectable()
export class CatService {
    constructor(private readonly prisma: PrismaService) {}
    async listAllCategories() {
        return this.prisma.category.findMany();
    }

    async addCat(data: CreateCatDto) {
        return this.prisma.category.create({
            data: {
                name: data.name,
            }
        });
    }

    async findOne(cat: string) {
        return this.prisma.category.findUnique( {
            where: {
                name: cat,
            },
        });
    }

    async deleteCategory(id: number) {
        await this.prisma.categoryOnTodo.deleteMany({
            where: {
                categoryId: id
            }
        });

        return this.prisma.category.delete({
            where: {
                id: id,
            }
        });
    }

}

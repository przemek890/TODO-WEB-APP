import {ConflictException, Injectable} from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {CreateUserDto} from "./dto/create-user.dto";
import * as argon2 from 'argon2';

@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}
    async create(createUserDto: CreateUserDto) {
        const passHash = await argon2.hash(createUserDto.password);
        try {
            return await this.prisma.user.create({
                data: {
                    email: createUserDto.email,
                    password: passHash,
                },
            });
        }
        catch (e) {
            console.log(e.code)
            if(e.code = 'P2002')
                throw new ConflictException("Uzytkownik juz istnieje");
            else {
                throw new ConflictException("Inny blad");
            }
        }
    }

    async findOne(ID: number) {
        return this.prisma.user.findUnique( {
            where: {
                id: ID,
            },
        });
    }

    async findOne2(email: string) {
        return this.prisma.user.findUnique( {
            where: {
                email: email,
            },
        });
    }

    deleteUser(id: number){
        return this.prisma.user.delete({
            where: {
                id: id,
            }
        })
    }

}

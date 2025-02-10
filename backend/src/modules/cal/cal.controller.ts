import {Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Post, Query, UseGuards} from '@nestjs/common';
import {CalService} from "./cal.service";
import {TokenGuard} from "../auth/token.guard";
import {TodoFilterDto} from "../todo/dto/todo-filter.dto";
import {UserID} from "../auth/user.decorator";
import {CreateTodoDto} from "../todo/dto/create-todo.dto";
import {CreateCalDto} from "./dto/create-cal.dto";
import {CalNotfoundException, TodoNotfoundException} from "../../exceptions/todo-notfound-exception";

@Controller('cal')
export class CalController {
    constructor(private calService: CalService) {}

    @Get()
    @UseGuards(TokenGuard)
    list_Call(@UserID() userid: number) {
        return this.calService.listCal(userid);
    }

    @Post()
    @UseGuards(TokenGuard)
    async add_Call(@Body() data: CreateCalDto,@UserID() userid: number) {
        await this.calService.deleteCals(userid);
        return this.calService.addCal(data,userid);
    }

    @Delete(':userId')
    @HttpCode(HttpStatus.NO_CONTENT)
    @UseGuards(TokenGuard)
    async delete_Calls(@Param('userId') userId: number) {
        await this.calService.deleteCals(userId)
    }

}

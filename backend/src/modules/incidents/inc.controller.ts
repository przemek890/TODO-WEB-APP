import {Body, Controller, HttpCode, HttpStatus, Post, UseGuards} from '@nestjs/common';
import {IncService} from "./inc.service";
import {TokenGuard} from "../auth/token.guard";
import {CreateIncidentDto} from "./dto/create-incidents";

@Controller('inc')
export class IncController {
    constructor(private incService: IncService) {}

    @Post()
    @UseGuards(TokenGuard)
    @HttpCode(HttpStatus.OK)
    async add_inc(@Body() data: CreateIncidentDto) {
        return this.incService.addincident(data);
    }
}

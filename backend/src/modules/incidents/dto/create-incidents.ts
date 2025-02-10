import {IsEmail, IsNotEmpty, IsString} from "class-validator";

export class CreateIncidentDto {
    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    description: string;
}

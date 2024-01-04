import { IsNotEmpty, IsString} from 'class-validator';

export class CreateCalDto {
    @IsString()
    @IsNotEmpty()
    history: string;
}



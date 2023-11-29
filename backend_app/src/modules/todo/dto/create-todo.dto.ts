import { IsNotEmpty, IsString, IsBoolean } from 'class-validator';


export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  done: boolean;
}
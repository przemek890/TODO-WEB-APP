import {IsNotEmpty, IsString, IsBoolean, IsArray} from 'class-validator';


export class CreateTodoDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsString()
  @IsNotEmpty()
  content: string;

  @IsBoolean()
  done: boolean;

  @IsArray()
  @IsNotEmpty()
  categories: number[];
}
import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  Query
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { CreateTodoDto } from './dto/create-todo.dto';
import {TodoNotfoundException} from "../../exceptions/todo-notfound-exception";
import {EditTodoDto} from "./dto/edit-todo.dto";
import {TodoFilterDto} from "./dto/todo-filter.dto";

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  listTodo(@Query() filter: TodoFilterDto) {
    return this.todoService.listTodo(filter);
  }


  @Get(':id')
  async getTodo(@Param('id',ParseIntPipe) id: number) {
    const todo = await this.todoService.get(id)
    if(!todo) throw new TodoNotfoundException();
    return todo;
  }

  @Post()
  addTodo(@Body() data: CreateTodoDto) {
    return this.todoService.addTodo(data);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteTodo(@Param('id') id: number) {
    const todo = await this.todoService.get(id)
    if (!todo) throw new TodoNotfoundException();

   await this.todoService.deleteTodo(id)
  }

  @Put(':id')
  async editTodo(@Param('id', ParseIntPipe) id: number, @Body() data: EditTodoDto) {
    const todo = await this.todoService.get(id)
    if (!todo) throw new TodoNotfoundException();

    return this.todoService.editTodo(id, data);
  }
}

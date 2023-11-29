import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';

@Injectable()
export class TodoService {
  listTodo() : { title: string; done: boolean; content: string }[] {
    return [
      {
        title: "Test",
        content: "test",
        done: true
      },
    ];
  }

  addTodo(data: CreateTodoDto) : CreateTodoDto {
    return data;
  }
  editTodo() : void {

  }
  deleteTodo(): void {

  }
}

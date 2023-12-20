import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import {PrismaService} from "../prisma/prisma.service";
import {EditTodoDto} from "./dto/edit-todo.dto";
import {TodoFilterDto} from "./dto/todo-filter.dto";
import {UserID} from "../auth/user.decorator";

@Injectable()
export class TodoService {
  constructor(private readonly  prisma: PrismaService) {}
  async listTodo(filter: TodoFilterDto,userId: number) {
    return this.prisma.todo.findMany({
      where: {
        done: filter.isDone,
        userId: userId, // <-------------- mod
      },
      orderBy: {
        [filter.sortBy]: filter.sortOrder,
      }
    });
  }

  async addTodo(data: CreateTodoDto, userid: number) {
    return this.prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
        userId: userid,
      }
    });
  }

  editTodo(id: number, data: EditTodoDto) {
    return this.prisma.todo.update({
      where: {
        id: id,
      },
      data,
    })
  }

  deleteTodo(id: number){
    return this.prisma.todo.delete({
      where: {
        id: id,
      }
    })
  }

  get(id: number) {
    return this.prisma.todo.findUnique({
      where: {
        id: id
      }
    })
  }
}

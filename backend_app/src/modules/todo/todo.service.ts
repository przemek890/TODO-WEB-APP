import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import {PrismaService} from "../prisma/prisma.service";
import {EditTodoDto} from "./dto/edit-todo.dto";
import {TodoFilterDto} from "./dto/todo-filter.dto";
import {UserID} from "../auth/user.decorator";

@Injectable()
export class TodoService {
  constructor(private readonly  prisma: PrismaService) {}
  async listTodo(filter: TodoFilterDto, userId: number) {
    return this.prisma.todo.findMany({
      where: {
        done: filter.isDone,
        userId: userId,
      },
      orderBy: {
        [filter.sortBy]: filter.sortOrder,
      },
      include: {
        categories: true,
      },
    });
  }

  async addTodo(data: CreateTodoDto, userid: number) {
    const todo = await this.prisma.todo.create({
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
        userId: userid,
      },
    });

    for (const categoryId of data.categories) {
      await this.prisma.categoryOnTodo.create({
        data: {
          todoId: todo.id,
          categoryId: categoryId,
        },
      });
    }
    // Najpierw tworzone jest nowe zadanie. Następnie, dla każdej kategorii w data.categories, tworzona jest
    // nowa instancja CategoryOnTodo, która łączy zadanie z kategorią.

    return todo;
  }


  async editTodo(id: number, data: EditTodoDto) {
    // Usuń istniejące powiązania
    await this.prisma.categoryOnTodo.deleteMany({
      where: {
        todoId: id,
      },
    });

    // Zaktualizuj zadanie
    const updatedTodo = await this.prisma.todo.update({
      where: {
        id: id,
      },
      data: {
        title: data.title,
        content: data.content,
        done: data.done,
      },
    });

    // Utwórz nowe powiązania
    for (const categoryId of data.categories) {
      await this.prisma.categoryOnTodo.create({
        data: {
          todoId: id,
          categoryId: categoryId,
        },
      });
    }

    return updatedTodo;
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
      },
      include: {
        categories: true,
      },
    })
  }

}

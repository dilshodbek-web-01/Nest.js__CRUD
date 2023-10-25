import { Injectable } from '@nestjs/common/decorators';
import { PrismaServise } from '@prisma';
import type { BookCreateRequest } from './interfaces';

@Injectable()
export class BookService {
  private readonly prisma: PrismaServise;

  constructor(prisma: PrismaServise) {
    this.prisma = prisma;
  }

  async getbooks(): Promise<void> {
    await this.prisma.book.findMany();
  }

  async bookCreate(payload: BookCreateRequest): Promise<void> {
    await this.prisma.book.create({
      data: {
        title: payload.title,
        price: payload.price,
        author: payload.author,
      },
    });
  }

  async deletebook(payload: BookCreateRequest): Promise<void> {
    await this.prisma.book.delete({
      where: {
        
      }
    });
  }
}

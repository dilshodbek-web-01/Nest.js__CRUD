import { Module } from '@nestjs/common';
import { PrismaServise } from '@prisma';
import { BookController } from './book.controller';
import { BookService } from './book.service';

@Module({
  providers: [PrismaServise, BookService],
  controllers: [BookController],
})
export class BookModule {}

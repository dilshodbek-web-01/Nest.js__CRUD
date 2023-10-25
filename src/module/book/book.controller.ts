import { ApiTags } from '@nestjs/swagger';
import { Controller, HttpCode, HttpStatus, Post, Body, Get } from '@nestjs/common';
import { BookService } from './book.service';
import { BookCreateDto } from './dtos';

@ApiTags('Book')
@Controller({
  path: '/api/book',
  version: '1',
})
export class BookController {
  private readonly service: BookService;

  constructor(service: BookService) {
    this.service = service;
  }

  @Get('read')
  async getbooks(): Promise<void> {
    await this.service.getbooks()
  }

  @HttpCode(HttpStatus.CREATED)
  @Post('/create')
  async bookCreate(@Body() body: BookCreateDto): Promise<void> {
    await this.service.bookCreate(body);
  }
}

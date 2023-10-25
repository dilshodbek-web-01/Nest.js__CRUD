import { ApiProperty } from '@nestjs/swagger';
import { Type } from 'class-transformer';
import { IsNumber, IsString, IsNotEmpty } from 'class-validator';
import type { BookCreateRequest } from '../interfaces';

export class BookCreateDto implements BookCreateRequest {
  @ApiProperty({
    example: "Men"
  })
  @IsString()
  @IsNotEmpty()
  title: string;

  @ApiProperty({
    example: "49 000"
  })
  @IsNumber()
  @Type(() => Number)
  @IsNotEmpty()
  price: string;

  @ApiProperty({
    example: "Fotih Duman"
  })
  @IsString()
  @IsNotEmpty()
  author: string;
}

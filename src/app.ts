import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config/dist';
import { databaseConfig } from '@config';
import { BookModule } from '@module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
      isGlobal: true
    }),
    BookModule
  ],
})
export class App {}

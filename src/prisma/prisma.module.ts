import { Module } from '@nestjs/common';
import { PrismaServise } from './prisma.service';

@Module({
    exports: [PrismaServise],
    providers: [PrismaServise]
})
export class PrismaModule {}

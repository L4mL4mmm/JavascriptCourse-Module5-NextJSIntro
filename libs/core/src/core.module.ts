// libs/core/src/core.module.ts
import { Module } from '@nestjs/common';
import { LoggerService } from './logger.service';
import { DatabaseService } from './database.service';

@Module({
  providers: [LoggerService, DatabaseService],
  exports: [LoggerService, DatabaseService], // Cho phép module bên ngoài sử dụng
})
export class CoreModule {}
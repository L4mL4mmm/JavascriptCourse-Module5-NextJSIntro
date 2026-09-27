// libs/core/src/logger.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class LoggerService {
  log(message: string): void {
    console.log(`[CORE LOG]: ${message}`);
  }
}

// libs/core/src/database.service.ts
import { Injectable } from '@nestjs/common';

@Injectable()
export class DatabaseService {
  connect(): string {
    return 'Database connected successfully';
  }
}
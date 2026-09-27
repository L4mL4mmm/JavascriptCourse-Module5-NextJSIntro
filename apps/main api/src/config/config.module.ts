// apps/main-api/src/config/config.module.ts
import { Module } from '@nestjs/common';
import { APP_CONFIG, appConfigValues } from './config.constants';

@Module({
  providers: [
    {
      provide: APP_CONFIG,
      useValue: appConfigValues,
    },
  ],
  exports: [APP_CONFIG],
})
export class ConfigModule {}
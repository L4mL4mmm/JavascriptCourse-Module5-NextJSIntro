// apps/main-api/src/config/config.constants.ts
export const APP_CONFIG = 'APP_CONFIG';

export interface AppConfig {
  appName: string;
  version: string;
}

export const appConfigValues: AppConfig = {
  appName: 'MyNestApp',
  version: '1.0',
};
declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: 'production' | 'development';
    JWT_SECRET: string
    DB_CONNECTION_STRING: string
  }
}

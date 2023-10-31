import { Module } from '@nestjs/common';
import { ObeliscoModule } from './obelisco/obelisco.module';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', 'public'),
    }),
    ObeliscoModule,
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}

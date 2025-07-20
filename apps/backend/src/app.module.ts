import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { WebConfigController } from './web-config/web-config.controller';
import { WebConfigModule } from './web-config/web-config.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env', '.env.local'],
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGODB_URI!),
    WebConfigModule,
  ],
  controllers: [AppController, WebConfigController],
  providers: [AppService],
})
export class AppModule {}

import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { WebConfigService } from './web-config.service';
import { WebConfigController } from './web-config.controller';
import { WebConfigRepository } from './repositories/web-config.repository';
import { WebConfig, WebConfigSchema } from './schemas/web-config.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: WebConfig.name, schema: WebConfigSchema },
    ]),
  ],
  controllers: [WebConfigController],
  providers: [WebConfigService, WebConfigRepository],
  exports: [WebConfigService, WebConfigRepository],
})
export class WebConfigModule {}

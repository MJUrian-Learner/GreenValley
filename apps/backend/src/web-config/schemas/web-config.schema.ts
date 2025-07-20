import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type WebConfigDocument = HydratedDocument<WebConfig>;

@Schema({ collection: 'web_config' })
export class WebConfig {
  @Prop({ required: true })
  website_name: string;
}

export const WebConfigSchema = SchemaFactory.createForClass(WebConfig);

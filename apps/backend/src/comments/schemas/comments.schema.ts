import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';

export type CommentDocument = HydratedDocument<Comment>;

@Schema({ collection: 'comments' })
export class Comment {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  email: string;

  @Prop({ type: Types.ObjectId, required: true })
  movie_id: Types.ObjectId;

  @Prop({ required: true })
  text: string;

  @Prop({ type: Date, required: true })
  date: Date;
}

export const CatSchema = SchemaFactory.createForClass(Comment);

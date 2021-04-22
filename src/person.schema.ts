import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema()
export class Person extends Document {
  @Prop({ required: true })
  index: number;

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  isActive: boolean;

  @Prop({ required: true })
  registered: Date;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  gender: string;

  @Prop()
  eyeColor: string;

  @Prop()
  favoriteFruit: string;

  @Prop()
  company: MongooseSchema.Types.Mixed;

  @Prop({ type: String })
  tags: [string];
}

export const PersonSchema = SchemaFactory.createForClass(Person);

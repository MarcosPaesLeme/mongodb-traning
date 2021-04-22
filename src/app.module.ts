import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PersonSchema } from './person.schema';

@Module({
  imports: [
    MongooseModule.forRoot('<REPLACE_FOR_YOUR_MONGODB_STRING>'),
    MongooseModule.forFeature([{ name: 'persons', schema: PersonSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

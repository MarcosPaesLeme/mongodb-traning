import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Person, PersonSchema } from './person.schema';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://ibmcloud:ibmcloud@localhost:27017/admin'),
    MongooseModule.forFeature([{ name: 'persons', schema: PersonSchema }]),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

// //'mongodb+srv://ibmcloud:ibmcloud@cluster0.psfmu.mongodb.net/training?retryWrites=true&w=majority'

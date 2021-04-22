import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Person } from './person.schema';

@Injectable()
export class AppService {
  constructor(
    @InjectModel('persons')
    private readonly personModel: Model<Person>,
  ) {}

  async getPersonWithoutGreenEye(): Promise<any> {
    return await this.personModel.find({
      eyeColor: { $ne: 'green' },
    });
  }

  async getPersonWithAgeBetween20Until30(): Promise<any> {
    return await this.personModel.find({
      age: { $gt: 20, $lt: 30 },
    });
  }

  async getPersonsLikesBananaOrApple(): Promise<any> {
    return await this.personModel.find({
      favoriteFruit: {
        $in: ['apple', 'banana'],
      },
    });
  }

  async puttingAllTogether(): Promise<any> {
    return await this.personModel.find({
      eyeColor: { $ne: 'green' },
      age: { $gt: 20, $lt: 30 },
      favoriteFruit: {
        $in: ['apple', 'banana'],
      },
    });
  }

  async getAll(): Promise<any> {
    return await this.personModel.find({});
  }

  async complex(): Promise<any> {
    return await this.personModel.aggregate([
      {
        $match: {
          $and: [{ 'company.location.country': 'Germany' }, { isActive: true }],
        },
      },
      {
        $project: {
          gender: 1,
          age: 1,
          company: 1,
        },
      },
      {
        $group: {
          _id: { gender: '$gender', company: '$company.title' },
          count: { $avg: '$age' },
        },
      },
      { $sort: { '_id.age': 1 } },
    ]);
  }
}

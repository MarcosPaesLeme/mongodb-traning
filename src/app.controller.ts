import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('pearson')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('without-green-eye')
  async getPersonsWithoutGreenEye() {
    return await this.appService.getPersonWithoutGreenEye();
  }

  @Get('age-between-20-30')
  async getPersonsWithAgeBetween20Until30() {
    return await this.appService.getPersonWithAgeBetween20Until30();
  }

  @Get('favoriteFruit-banana-or-apple')
  async getPersonsLikesBananaOrApple() {
    return await this.appService.getPersonsLikesBananaOrApple();
  }

  @Get('all-together')
  async puttingAllTogether() {
    return await this.appService.puttingAllTogether();
  }

  @Get('comparison')
  async comparison() {
    console.time('Using the power of Mongodb');
    const allTogether = await this.appService.puttingAllTogether();
    console.timeEnd('Using the power of Mongodb');

    console.time('Using only nodejs');
    const allData = await this.appService.getAll();

    const result = allData
      .filter((item) => item.eyeColor !== 'green')
      .filter((item) => item.age > 20 && item.age < 30)
      .filter(
        (item) =>
          item.favoriteFruit === 'apple' || item.favoriteFruit === 'banana',
      );

    console.timeEnd('Using only nodejs');

    console.log({
      usingMongodb: allTogether.length,
      withoutMongodb: result.length,
    });

    return {
      usingMongodb: allTogether.length,
      withoutMongodb: result.length,
    };
  }

  @Get('complex')
  async complex() {
    return await this.appService.complex();
  }
}

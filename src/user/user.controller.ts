import { Controller, Get } from '@nestjs/common';

@Controller('api/users')
export class UserController {
  @Get()
  get(): object {
    return {
      status: 'ok',
      data: {
        name: 'aldi',
        age: 37,
      },
    };
  }
}

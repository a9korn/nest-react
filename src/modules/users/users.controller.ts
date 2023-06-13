import { Controller, Get } from '@nestjs/common';

@Controller('users')
export class UsersController {
  @Get()
  async getUsers() {
    return [
      { id: 1, name: 'user1' },
      { id: 2, name: 'user2' },
      { id: 3, name: 'user3' },
    ];
  }
}

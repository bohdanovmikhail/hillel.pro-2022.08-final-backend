import { Controller, Get, Param } from '@nestjs/common';

import { UserModel } from '@models';

@Controller({ path: 'users' })
export class AppController {
  private userList: UserModel[] = [];

  @Get()
  public getAll() {
    return this.userList;
  }

  @Get(':userId')
  public getUserById(@Param('userId') userId: string) {
    return this.userList.find((user) => user.id === userId);
  }
}

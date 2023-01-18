import { MessageModel } from '@models';

import { BaseModel } from './_BaseModel';

export interface ChatModel extends BaseModel {
  title: string;
  lastMessage?: MessageModel;
}

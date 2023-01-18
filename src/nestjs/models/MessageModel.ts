import { BaseModel } from './_BaseModel';

export interface MessageModel extends BaseModel {
  fromUserId: string;
  created: number;
  text: string;
}

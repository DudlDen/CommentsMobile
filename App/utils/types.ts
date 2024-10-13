import Comment from '../database/model/Comments';

export interface IUser {
  username: string;
  id: string;
  email: string;
}

export interface IComment extends Comment {
  parentComments?: IComment[];
}

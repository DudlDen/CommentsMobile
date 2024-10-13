import {Model} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export const USERS_TABLE = 'users';

export default class User extends Model {
  static table = USERS_TABLE;

  @field('email') email;

  @field('username') username;

  @field('password') password;
}

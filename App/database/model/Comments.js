import {Model, Q} from '@nozbe/watermelondb';
import {field} from '@nozbe/watermelondb/decorators';

export const COMMENTS_TABLE = 'comments';

export default class Comment extends Model {
  static table = COMMENTS_TABLE;

  @field('text') text;

  @field('author') author;

  @field('parentId') parentId;

  @field('updatedAt') createdAt;

  async replies() {
    return this.collections
      .get(COMMENTS_TABLE)
      .query(Q.where('parentId', this.id))
      .fetch();
  }
}

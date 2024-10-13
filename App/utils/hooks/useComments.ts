import {useEffect, useState} from 'react';
import {IComment} from '../types';
import {database} from '../../../index';
import {Q} from '@nozbe/watermelondb';
import {COMMENTS_TABLE} from '../../database/model';
import Comment from '../../database/model/Comments';
import moment from 'moment';

export const COMMENTS_PAGE_SIZE = 25;

export function useComments() {
  const [comments, setComments] = useState<IComment[]>([]);
  const [parentComment, setParentComment] = useState<IComment | null>(null);
  const [page, setPage] = useState(1);
  const [commentsCount, setCommentsCount] = useState(0);
  const getParentComments = async (commentsDB: IComment[]) => {
    for (let comment of commentsDB) {
      const replies = (await comment.replies()) as IComment[];
      comment.parentComments = replies;
      await getParentComments(replies);
    }
  };

  const getComments = async () => {
    const commentsDB = await database.collections
      .get<IComment>(COMMENTS_TABLE)
      .query(
        Q.where('parentId', null),
        Q.skip((page - 1) * COMMENTS_PAGE_SIZE),
        Q.take(COMMENTS_PAGE_SIZE),
      )
      .fetch();

    await getParentComments(commentsDB);

    setComments(commentsDB);
  };

  const sendComment = async (
    text: string,
    author: string,
    parentId?: string,
  ) => {
    await database.write(async () => {
      await database.collections
        .get<Comment>(COMMENTS_TABLE)
        .create(comment => {
          comment.text = text;
          comment.author = author;
          comment.createdAt = moment(new Date())
            .utc()
            .format('DD.MM.YYYY HH:mm');
          if (parentId) {
            comment.parentId = parentId;
          } else {
            setCommentsCount(value => value + 1);
          }
        });
    });
    getComments();
  };

  useEffect(() => {
    database.collections
      .get<IComment>(COMMENTS_TABLE)
      .query(Q.where('parentId', null))
      .fetchCount()
      .then(count => {
        setCommentsCount(count);
      });
    getComments();
  }, []);

  useEffect(() => {
    getComments();
  }, [page]);

  return {
    comments,
    sendComment,
    parentComment,
    setParentComment,
    page,
    setPage,
    commentsCount,
  };
}

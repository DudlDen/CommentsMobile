import {appSchema, tableSchema} from '@nozbe/watermelondb';

export default appSchema({
  version: 1,
  tables: [
    tableSchema({
      name: 'users',
      columns: [
        {name: 'email', type: 'string'},
        {name: 'username', type: 'string'},
        {name: 'password', type: 'string'},
      ],
    }),
    tableSchema({
      name: 'comments',
      columns: [
        {name: 'text', type: 'string'},
        {name: 'author', type: 'string'},
        {name: 'updatedAt', type: 'string'},
        {name: 'parentId', type: 'string', isOptional: true},
      ],
    }),
  ],
});

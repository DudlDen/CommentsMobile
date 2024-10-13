/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App/App';
import {name as appName} from './app.json';
import {Database} from '@nozbe/watermelondb';
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite';

import appSchema from './App/database/schema/appSchema';
import User from './App/database/model/User';
import Comment from './App/database/model/Comments';
import migrations from './App/database/model/migrations';

const adapter = new SQLiteAdapter({
  schema: appSchema,
  migrations,
  dbName: 'DBComm',
  experimentalUseJSI: false,
});
export const database = new Database({
  adapter,
  modelClasses: [User, Comment],
  actionsEnabled: true,
});

AppRegistry.registerComponent(appName, () => App);
